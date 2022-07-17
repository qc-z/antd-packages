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
  Grid: 'grid',
  Image: 'image',
  Input: 'input',
  InputNumber: 'input-number',
  Layout: 'layout',
  List: 'list',
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
function findKey(key: string) {
  for (const name in finallyNames) {
    if (key === 'mentions') {
      return 'Mention'
    }
    if (
      finallyNames[
        name as keyof typeof finallyNames
      ] === key
    )
      return name
  }
}

const CWD = process.cwd()
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

let str = ''
let style = ''

export async function parseComponentExports() {
  const componentNames = []

  /**
   * 遍历组件
   */
  const excludes = [
    'grid',
    'notification',
    'message'
  ]
  for (const comp of componentEntrys) {
    componentNames.push(path.basename(comp))
    const name = path.basename(comp)

    // str += `export { default as ${name} } from './${name}'\n`
    str += `export { default as ${findKey(
      name
    )} } from './${name}'\n`
    if (name === 'slider') {
      str += `export type { SliderSingleProps } from './${name}'\n`
    } else if (!excludes.includes(name)) {
      str += `export type { ${findKey(
        name
      )}Props } from './${name}'\n`
    }

    let componentName = name.replace(
      name[0],
      name[0].toLowerCase()
    )
    componentName = componentName.replace(
      /([A-Z])/g,
      (match, p1, offset, string) => {
        // 一个捕获组捕获全部，所以match等于p1
        return '-' + p1.toLowerCase()
      }
    )

    style += `@import '../${name}/style/my-${componentName}.less';\n`
  }

  return str
}

async function writeEntry() {
  fs.writeFileSync(
    `${CWD}/src/index.ts`,
    await parseComponentExports()
  )
  fs.writeFileSync(`${CWD}/src/index.d.ts`, str)
  fs.writeFileSync(
    `${CWD}/src/style/components.less`,
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
  console.log(
    `${chalk.cyanBright.bold(
      '已更新 src/index.d.ts 入口文件'
    )}`
  )
  console.log(
    `${chalk.cyanBright.bold(
      '已更新 src/style/components.less 样式文件'
    )}`
  )
}

writeEntry()
