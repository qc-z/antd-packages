import fs from 'fs'
import path from 'path'
import { prefix } from '../constant'
import chalk from 'chalk'
const exec = require('child_process').exec

module.exports = function (
  /** @type {import('plop').NodePlopAPI} */ plop
) {
  plop.setGenerator('component', {
    description: '创建组件',
    prompts: [
      {
        name: 'name',
        validate: function (name) {
          if (checkComponentExist(name)) {
            return `组件库中已经存在名为${name}的组件！请仔细核对后重新创建`
          }
          // if (!checkComponentName(name)) {
          //   return '组件名称请使用大写开头方式命名'
          // }

          exec('npm run gen-entry', (err) => {
            if (err) {
              console.log(err)
              console.log(
                chalk.red(
                  'npm run gen-enter 命令执行失败'
                )
              )
            } else {
              console.log(
                chalk.green(
                  `${name} 组件已经成功创建，请愉快地开发组件吧~`
                )
              )
            }
          })
          return true
        }
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: '../src/{{name}}/',
        base: '../scripts/_template',
        templateFiles:
          '../scripts/_template/**/**',
        data: {
          prefix
        }
      }
    ]
  })
}

/**
 * 校验组件名称是否符合短横线命名
 * @type {(str: string) => boolean}
 */
const checkComponentName = (componentName) => {
  const firstStr = componentName.charAt(0)
  return firstStr === firstStr.toUpperCase()
}

/**
 * 校验组件是否已经创建
 * @type {(str: string) => boolean}
 */
const checkComponentExist = (componentName) => {
  return fs.existsSync(
    path.resolve(
      __dirname,
      `../src/${componentName}`
    )
  )
}
