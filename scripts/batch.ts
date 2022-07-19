/* eslint-disable */
// @ts-nocheck

const exec = require('child_process').exec
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
const { copyDir, delDir } = require('./utils')
const log = console.log.bind(console)
const matter = require('gray-matter')
// antd顺序
const typeOrder = {
  // Component
  Overview: -1,
  General: 0,
  Layout: 1,
  Navigation: 2,
  'Data Entry': 3,
  'Data Display': 4,
  Feedback: 5,
  Other: 6,
  Deprecated: 7,

  组件总览: -1,
  通用: 0,
  布局: 1,
  导航: 2,
  数据录入: 3,
  数据展示: 4,
  反馈: 5,
  其他: 6,
  废弃: 7,

  // Design
  原则: 1,
  Principles: 1,
  全局规则: 2,
  重型组件: 8,
  ProComponents: 8,
  'Global Rules': 2,
  模板文档: 3,
  'Template Document': 3
}
// antd现有组件
const components = [
  'affix',
  'alert',
  'anchor',
  'auto-complete',
  'avatar',
  'back-top',
  'badge',
  'breadcrumb',
  'button',
  'calendar',
  'card',
  'carousel',
  'cascader',
  'checkbox',
  'col',
  'collapse',
  'comment',
  'config-provider',
  'date-picker',
  'descriptions',
  'divider',
  'drawer',
  'dropdown',
  'empty',
  'form',
  'grid',
  'image',
  'input',
  'input-number',
  'layout',
  'list',
  'mentions',
  'menu',
  'message',
  'modal',
  'notification',
  'page-header',
  'pagination',
  'popconfirm',
  'popover',
  'progress',
  'radio',
  'rate',
  'result',
  'row',
  'segmented',
  'select',
  'skeleton',
  'slider',
  'space',
  'spin',
  'statistic',
  'steps',
  'switch',
  'table',
  'tabs',
  'tag',
  'time-picker',
  'timeline',
  'tooltip',
  'transfer',
  'tree',
  'tree-select',
  'typography',
  'upload'
]
// 转换大小写
function toUpperName(name) {
  const [f, l] = name.split('-')
  const UpperName = (str) => {
    if (!str) return ''
    return str
      ?.toLowerCase()
      .replace(/( |^)[a-z]/g, (L) =>
        L.toUpperCase()
      )
  }
  return UpperName(f) + UpperName(l)
}
// 生成基础组件
async function genComponents() {
  for (const name of components) {
    try {
      await runExec(name)
    } catch (err) {
      continue
    }
  }
}
function runExec(name: string) {
  return new Promise((reslove, reject) => {
    exec(`npm run gen ${name}`, (err: any) => {
      if (err) {
        console.log(
          chalk.red('npm run gen 命令执行失败')
        )
        reject(err)
      } else {
        console.log(chalk.green(name + '已创建'))
        reslove('ok')
      }
    })
  })
}
// 复制antd组件示例文档到docs文件夹
function copyDemos() {
  for (const name of components) {
    copyDir(
      `ant-docs/${name}/demo`,
      `src/${name}/docs`,
      () =>
        console.log(`${name} 文档已生成在docs下`)
    )
  }
}
// 复制antd主文档到README.md 并转换为dumi需要的格式（readme不需要编译 加上 | pure）
function copyMd() {
  for (const name of components) {
    const isExit = fs.existsSync(
      `ant-docs/${components[name]}/index.zh-CN.md`
    )
    if (!isExit) continue
    const md = fs.readFileSync(
      `ant-docs/${components[name]}/index.zh-CN.md`,
      'utf-8'
    )
    const data = matter(md)

    const formatter = `---
title: ${data?.data?.title} ${
      data?.data?.subtitle
    }
order: ${typeOrder[data?.data?.type]}
group:
  title: ${data?.data?.type}
nav:
  title: ${data?.data?.title} ${
      data?.data?.subtitle
    }
  path: /components
--- `
    const result = `${formatter}\n# ${data?.data?.subtitle} ${data?.data?.title}\n${data.content}`
    const pure = result
      .split('```tsx')
      .join('```tsx | pure')
      .split('```jsx')
      .join('```jsx | pure')
      .split('```__react')
      .join('```__react | pure')
    // 重新编译为dumi readme需要的格式
    fs.writeFileSync(
      path.join(`src/${[name]}/README.md`),
      pure,
      'utf-8'
    )
  }
}
// 转换demos里面的md文件未tsx
function watch(_path: string, init = false) {
  log(chalk.green('正在初始化docs临时文件'))
  const root = init ? _path : path.dirname(_path)
  const temp = path.resolve(root, '../demos')
  const fileNames = fs.readdirSync(root)
  fs.existsSync(temp) && delDir(temp)
  fs.mkdirSync(temp, {
    recursive: true
  })
  const config: {
    name: string
    order: number
    title: string
  }[] = []
  fileNames.forEach((fileName) => {
    if (['index.md', '.temp'].includes(fileName))
      return
    const content = fs.readFileSync(
      `${root}/${fileName}`,
      'utf-8'
    )
    let writeMd, title
    const desc = content
      .split('## zh-CN')?.[1]
      ?.split('## en-US')?.[0]
      .trim()
    const order = matter(content)?.data?.order
    let isCustom = false
    let commom = ''
    // antd复制的文档
    if (
      content.indexOf('zh-CN') > -1 &&
      content.indexOf('en-US') > -1
    ) {
      const mark = '```'
      const type =
        content.indexOf('tsx') > -1
          ? 'tsx'
          : 'jsx'
      const md = content
        .split(`${mark}${type}`)?.[1]
        ?.split(mark)?.[0]
      title =
        matter(content)?.data?.title?.['zh-CN']
      commom = `\n/**
  * title: ${title}
  * desc: ${desc?.replace(/\s/g, '')}
  */`
      writeMd = `${commom} \n` + md
    } else {
      isCustom = true
      // 自己开发的文档
      writeMd = content
      title = matter(content)?.data?.title || ''
    }

    const data = {
      order,
      title,
      desc,
      md: writeMd,
      fileName: fileName
    }
    // 重新编译为dumi需要的格式
    fs.writeFileSync(
      path.join(
        temp,
        data.fileName.split('.md')[0] + '.tsx'
      ),
      data.md,
      'utf-8'
    )
    // 获取所有配置
    config.push({
      name: data.fileName.split('.md')[0],
      order,
      title
    })
  })

  let codes = ''
  config.sort((a, b) => {
    return a.order - b.order
  })
  for (const i of config) {
    codes += `## ${i.title} \n<code src="./demos/${i.name}.tsx"></code>\n`
  }
  const readme = fs.readFileSync(
    `${path.resolve(root, '../README.md')}`,
    'utf-8'
  )

  const read = readme
    .split('## API')
    .join(`${codes}\n## API`)

  // 嵌进去的md
  fs.writeFileSync(
    `${path.resolve(root, '../README.md')}`,
    read,
    'utf-8'
  )
}
function md2Tsx() {
  for (const name of components) {
    watch(`src/${name}/docs`, true)
  }
}
// 移除docs临时文件夹
function removeMd() {
  for (const name of components) {
    fs.existsSync(`src/${name}/docs`) &&
      delDir(`src/${name}/docs`)
  }
}
// READMD.md转换成dumi需要的头部注释
function fixMdMatter() {
  for (const name of components) {
    const isExit = fs.existsSync(
      `src/${name}/README.md`
    )
    if (!isExit) continue
    const md = fs.readFileSync(
      `src/${name}/README.md`,
      'utf-8'
    )
    const data = matter(md)
    if (!data?.data) continue

    const formatter = `---
title: ${data?.data?.title?.split(' ')[1]} ${
      data?.data?.title?.split(' ')[0]
    }
group:
  title: ${data?.data?.group?.title}
  order: ${data?.data?.order}
nav:
  title: ${data?.data?.title?.split(' ')[1]} ${
      data?.data?.title?.split(' ')[0]
    }
  path: /components
--- `
    const result = `${formatter}\n# ${data?.data?.subtitle} ${data?.data?.title}\n${data.content}`
    // pure 是不需要编译的
    const pure = result
      .split('```tsx')
      .join('```tsx | pure')
      .split('```jsx')
      .join('```jsx | pure')
      .split('```__react')
      .join('```__react | pure')
    fs.writeFileSync(
      path.join(`src/${name}/README.md`),
      `${formatter}\n${data.content}`,
      'utf-8'
    )
  }
}
// 处理组件样式文件
function autoImportCss() {
  for (const name of components) {
    if (name === 'col' || name === 'row') continue
    // index.less
    fs.writeFileSync(
      path.join(`src/${name}/style/index.less`),
      `@import 'antd/es/${name}/style/index.less';
@import '../../style/custom.less';
@import './${name}.less';`,
      'utf-8'
    )
    // self.less
    fs.writeFileSync(
      path.join(
        `src/${[name]}/style/${name}.less`
      ),
      `.${name} {

}`,
      'utf-8'
    )
    // index.ts
    fs.writeFileSync(
      path.join(`src/${[name]}/style/index.ts`),
      `import './index.less'`,
      'utf-8'
    )
  }
}

function fixFolder() {
  for (const name of components) {
    // self.tsx
    fs.writeFileSync(
      path.join(`src/${name}/${name}.tsx`),
      `import { ${components[name]} } from 'antd'\n
export type { ${components[name]}Props } from 'antd/lib/${name}'\n
export * from 'antd/lib/${name}'\n
export default ${components[name]}`,
      'utf-8'
    )
    // index.tsx
    fs.writeFileSync(
      path.join(`src/${[name]}/index.tsx`),
      `import ${components[name]} from './${name}'\n
export type { ${components[name]}Props } from './${name}'\n
export default ${components[name]}`,
      'utf-8'
    )
  }
}

// 生成基本组件结构
// genComponents()

// 复制antd的demos
// copyDemos()

// 复制md
// copyMd()

// docs里面的md转换成tsx
// md2Tsx()

// 删除md临时文件
// removeMd()

// READMD.md转换成dumi需要的头部注释
// fixMdMatter()

// 处理组件样式文件
autoImportCss()

// 重新组织目录结构
// fixFolder()
