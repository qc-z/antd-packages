import chokidar from 'chokidar'
import path from 'path'
import chalk from 'chalk'
import fs from 'fs'
const matter = require('gray-matter')
const utils = require('./utils')
const log = console.log.bind(console)

// const args = process.argv.slice(2)
// const argv = require('minimist')(args)

// const PACKAGES_PATH = path.join(process.cwd(), '/src')

function docsChangeWatcher() {
  init()
  // chokidar.watch('src/**/doc/*.md', {
  //   ignoreInitial: true
  // }).on('all', (event: any, _path: any) => {
  //   log(chalk.yellow(_path + '变化，正在执行编译命令...'))
  //   watch(_path)
  // });
}
let isFist = false
function watch(_path: string, init = false) {
  !isFist &&
    log(chalk.green('正在初始化docs临时文件'))
  isFist = true
  const root = init ? _path : path.dirname(_path)
  const temp = path.resolve(root, '../demos')
  const fileNames = fs.readdirSync(root)
  fs.existsSync(temp) && utils.delDir(temp)
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
      writeMd =
        mark + type + `${commom} \n` + md + mark
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
      path.join(temp, data.fileName),
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
    codes += `## ${i.title} \n <embed src="./demos/${i.name}.md"></embed>\n`
  }
  // 嵌进去的md
  fs.writeFileSync(
    path.join(
      path.resolve(root, '../demos'),
      '_config.md'
    ),
    codes,
    'utf-8'
  )
  !init &&
    log(
      chalk.green(
        '生成 ' +
          chalk.blue.underline.bold(
            path.join(
              path.resolve(root, '../demos'),
              '_config.md'
            )
          ) +
          ' 文件，请复制到 ' +
          chalk.blue.underline.bold(
            path.join(
              path.resolve(root, '../'),
              'README.md'
            )
          ) +
          ' 占位符里面'
      )
    )
}
function init() {
  const files = fs.readdirSync(
    path.resolve(process.cwd(), 'src')
  )
  files.forEach((item) => {
    if (item.indexOf('.') === -1) {
      const stat = fs
        .lstatSync(`src/${item}`)
        .isDirectory()
      if (stat) {
        const demos = fs.readdirSync(
          `src/${item}`
        )
        if (demos.includes('doc')) {
          // console.log(`src/${item}/demos`)
          watch(`src/${item}/doc`, true)
          // utils.delDir(`src/${item}/demos`)
        }
      }
    }
  })
}
docsChangeWatcher()
