const exec = require('child_process').exec
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'
const { copyDir, delDir } = require('./utils')
const log = console.log.bind(console)
const matter = require('gray-matter')

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
const finallyNames = {
  Affix: 'affix',
  Alert: 'alert',
  Anchor: 'anchor',
  AutoComplete: 'auto-complete',
  Avatar: 'avatar',
  BackTop: 'back-top',
  Badge: 'badge',
  Breadcrumb: 'breadcrumb',
  Button: 'button',
  Calendar: 'calendar',
  Card: 'card',
  Carousel: 'carousel',
  Cascader: 'cascader',
  Checkbox: 'checkbox',
  Col: 'col',
  Collapse: 'collapse',
  Comment: 'comment',
  ConfigProvider: 'config-provider',
  DatePicker: 'date-picker',
  Descriptions: 'descriptions',
  Divider: 'divider',
  Drawer: 'drawer',
  Dropdown: 'dropdown',
  Empty: 'empty',
  Form: 'form',
  Image: 'image',
  Input: 'input',
  InputNumber: 'input-number',
  Layout: 'layout',
  List: 'list',
  Locale: 'locale',
  LocaleProvider: 'locale-provider',
  Mentions: 'mentions',
  Menu: 'menu',
  message: 'message',
  Modal: 'modal',
  notification: 'notification',
  PageHeader: 'page-header',
  Pagination: 'pagination',
  Popconfirm: 'popconfirm',
  Popover: 'popover',
  Progress: 'progress',
  Radio: 'radio',
  Rate: 'rate',
  Result: 'result',
  Row: 'row',
  Segmented: 'segmented',
  Select: 'select',
  Skeleton: 'skeleton',
  Slider: 'slider',
  Space: 'space',
  Spin: 'spin',
  Statistic: 'statistic',
  Steps: 'steps',
  Switch: 'switch',
  Table: 'table',
  Tabs: 'tabs',
  Tag: 'tag',
  TimePicker: 'time-picker',
  Timeline: 'timeline',
  Tooltip: 'tooltip',
  Transfer: 'transfer',
  Tree: 'tree',
  TreeSelect: 'tree-select',
  Typography: 'typography',
  Upload: 'upload'
}

function auto() {
  const fileNames = fs.readdirSync('./ant-docs')
  const entrys = []
  for (const name of fileNames) {
    entrys.push(
      titleCase(name).replace(/-(\w)/g, upper)
    )
  }
}
// 首字母大写
function titleCase(str: string) {
  return (
    str.slice(0, 1).toUpperCase() +
    str.slice(1).toLowerCase()
  )
}
// -转大写
function upper(all: any, letter: string) {
  return letter.toUpperCase()
}

async function genComponents() {
  for (const name in finallyNames) {
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

function genDemos() {
  for (const name in finallyNames) {
    copyDir(
      `ant-docs/${finallyNames[name]}/demo`,
      `src/${name}/docs`,
      () => {
        console.log('ok')
      }
    )
    // try {
    //   await runExec(name)
    // } catch (err) {
    //   continue
    // }
  }
}

function copyMd() {
  for (const name in finallyNames) {
    const isExit = fs.existsSync(
      `ant-docs/${finallyNames[name]}/index.zh-CN.md`
    )
    if (!isExit) continue
    const md = fs.readFileSync(
      `ant-docs/${finallyNames[name]}/index.zh-CN.md`,
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
    // // 获取所有配置
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
  // !init && log(chalk.green(
  //   '生成 ' +
  //   chalk.blue.underline.bold(path.join(path.resolve(root, '../demos'), '_config.md'))
  //   + ' 文件，请复制到 ' +
  //   chalk.blue.underline.bold(path.join(path.resolve(root, '../'), 'README.md'))
  //   + ' 占位符里面'
  // ))
}
function md2Tsx() {
  for (const name in finallyNames) {
    // const fileNames = fs.readdirSync(`src/${name}/docs`)
    watch(`src/${name}/docs`, true)
  }
}

function removeMd() {
  for (const name in finallyNames) {
    // const fileNames = fs.readdirSync(`src/${name}/docs`)
    fs.existsSync(`src/${name}/docs`) &&
      delDir(`src/${name}/docs`)
  }
}

function fixMd() {
  for (const name in finallyNames) {
    const isExit = fs.existsSync(
      `src/${[name]}/README.md`
    )
    if (!isExit) continue
    const md = fs.readFileSync(
      `src/${[name]}/README.md`,
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
    //     const result = `${formatter}\n# ${data?.data?.subtitle} ${data?.data?.title}\n${data.content}`
    //     const pure = result
    //       .split('```tsx')
    //       .join('```tsx | pure')
    //       .split('```jsx')
    //       .join('```jsx | pure')
    //       .split('```__react')
    //       .join('```__react | pure')
    // 重新编译为dumi readme需要的格式
    fs.writeFileSync(
      path.join(`src/${[name]}/README.md`),
      `${formatter}\n${data.content}`,
      'utf-8'
    )
  }
}
// 生成基本组件结构
// genComponents()

// 获取antd所有组件名字
// auto()
// 生成demos
// genDemos()
// 复制md
// copyMd()
// docs里面的md转换成tsx
// md2Tsx()
// 删除md临时文件
// removeMd()

// bug 重新处理md数据
fixMd()
