const gulp = require('gulp')
const { src, dest } = require('gulp')
const fs = require('fs')
const less = require('gulp-less')
const path = require('path')
const chalk = require('chalk')

function getComponentsName() {
  const CWD = process.cwd()
  const result = []
  const componentEntrys = fs.readdirSync(
    path.resolve(CWD, '../src/')
  )
  componentEntrys.forEach((name) => {
    let fPath = path.resolve(
      CWD,
      `../src/${name}`
    )
    let stats = fs.statSync(fPath)
    if (
      stats.isDirectory() &&
      !~name.indexOf('.') &&
      !~name.indexOf('style')
    ) {
      result.push(name)
    }
  })
  return result
}
function buildComponentCss(cb) {
  const components = getComponentsName()
  components.forEach((name) => {
    src(`../src/${name}/style/**.less`, {
      allowEmpty: true
    })
      .pipe(less({ javascriptEnabled: true }))
      .pipe(dest(`../lib/${name}/style`))
      .pipe(dest(`../es/${name}/style`))
  })
  cb()
  console.log(
    `${chalk.cyanBright.bold('文件编译完成')}`
  )
}

function buildEntryCss() {
  src(`../src/style/**.less`, {
    allowEmpty: true
  })
    .pipe(less({ javascriptEnabled: true }))
    .pipe(dest(`../lib/style`))
    .pipe(dest(`../es/style`))
    .pipe(dest(`../dist`))
}

function entry(cb) {
  buildComponentCss(cb)
  buildEntryCss(cb)
}

exports.default = gulp.series(entry)
