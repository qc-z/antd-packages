/**
 * todo
 * 生成 bundle 的入口文件
 * 1. 读取 packages/index.ts 拿到导出 （es-module-lexer）
 * 2. 生成一个 entry.ts
 */
import path from 'path'
import fs from 'fs'
import { spawn } from 'child_process'
import klawSync from 'klaw-sync'
import chalk from 'chalk'

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
function toUpperName(name: string) {
  // 不需要转换
  const excludes = ['message', 'notification']
  if (excludes.includes(name)) return name

  const [f, l] = name.split('-')
  const UpperName = (str: string) => {
    if (!str) return ''
    return str
      ?.toLowerCase()
      .replace(/( |^)[a-z]/g, (L: string) =>
        L.toUpperCase()
      )
  }
  return UpperName(f) + UpperName(l)
}

// const CWD = process.cwd()
const PACKAGES_PATH = path.resolve(
  __dirname,
  '../src'
)
const componentEntrys = klawSync(PACKAGES_PATH, {
  nofile: true,
  depthLimit: 0
})
  .filter(
    (dir: { path: string }) =>
      !~dir.path.indexOf('.') &&
      !~dir.path.indexOf('style')
  )
  .map((dir: { path: string }) =>
    /^win/.test(process.platform)
      ? path
          .join(dir.path)
          .split(path.sep)
          .join(path.posix.sep)
      : path.join(dir.path)
  )

let scripts = '// auto create by gen-entry\n'
let style = '// auto create by gen-entry\n'

function parseComponentExports() {
  // const componentNames = []

  /**
   * 遍历组件
   */
  const excludes = [
    'grid',
    'notification',
    'message'
  ]
  for (const comp of componentEntrys) {
    // componentNames.push(path.basename(comp))
    const name = path.basename(comp)

    // str += `export { default as ${name} } from './${name}'\n`
    scripts += `export { default as ${toUpperName(
      name
    )} } from './${name}'\n`
    if (name === 'slider') {
      scripts += `export type { SliderSingleProps } from './${name}'\n`
    } else if (name === 'mentions') {
      scripts += `export type { MentionProps } from './${name}'\n`
    } else if (!excludes.includes(name)) {
      scripts += `export type { ${toUpperName(
        name
      )}Props } from './${name}'\n`
    }

    // let componentName = name.replace(
    //   name[0],
    //   name[0].toLowerCase()
    // )
    // componentName = componentName.replace(
    //   /([A-Z])/g,
    //   (match, p1, offset, string) => {
    //     // 一个捕获组捕获全部，所以match等于p1
    //     return '-' + p1.toLowerCase()
    //   }
    // )

    style += `@import '../${name}/style/${name}.less';\n`
  }

  // return str
}

async function writeEntry() {
  parseComponentExports()
  fs.writeFileSync('src/index.ts', scripts)
  fs.writeFileSync(
    'src/style/components.less',
    style
  )
  /**
   * 格式化
   */
  spawn(
    /^win/.test(process.platform)
      ? 'eslint.cmd'
      : 'eslint',
    ['./src/index.ts', '--fix']
  ).on('error', function (err) {
    throw err
  })
  console.log(
    `${chalk.cyanBright.bold(
      '已更新 src/index.ts 入口文件'
    )}`
  )
  // console.log(
  //   `${chalk.cyanBright.bold(
  //     '已更新 src/index.d.ts 入口文件'
  //   )}`
  // )
  console.log(
    `${chalk.cyanBright.bold(
      '已更新 src/style/components.less 样式文件'
    )}`
  )
}

writeEntry()
