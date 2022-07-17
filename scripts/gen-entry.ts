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
let type = ''
let style = ''

export async function parseComponentExports() {
  const componentNames = []

  /**
   * 遍历组件
   */
  for (const comp of componentEntrys) {
    componentNames.push(path.basename(comp))
    const name = path.basename(comp)
    // str += `export { default as ${name} } from './${name}'\n`
    str += `export { default as ${name} } from './${name}'\n`
    type += `export { default as ${name} } from './${name}'\n`
    type += `export type { ${name}Props } from './${name}'\n`
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
    console.log(componentName)

    style += `@import '../${name}/style/my-${componentName}.less';\n`
  }
  // str += '\n'
  // str += `export { ${componentNames.join(
  //   ', '
  // )} }\n`

  // str += '\n'
  // str += `export default { ${componentNames.join(
  //   ', '
  // )} }\n`

  return str
}

async function writeEntry() {
  fs.writeFileSync(
    `${CWD}/src/index.ts`,
    await parseComponentExports()
  )
  fs.writeFileSync(`${CWD}/src/index.d.ts`, type)
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
