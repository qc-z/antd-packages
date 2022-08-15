const gulp = require('gulp')
const { src, dest } = require('gulp')
const fs = require('fs')
const less = require('gulp-less')
const path = require('path')
const chalk = require('chalk')
const cleancss = require('gulp-clean-css')
const rename = require('gulp-rename')

function getComponentsName() {
  const CWD = process.cwd()
  const result = []
  const componentEntrys = fs.readdirSync(path.resolve(CWD, '../src/'))
  componentEntrys.forEach((name) => {
    let fPath = path.resolve(CWD, `../src/${name}`)
    let stats = fs.statSync(fPath)
    if (stats.isDirectory() && !~name.indexOf('.') && !~name.indexOf('style')) {
      result.push(name)
    }
  })
  return result
}
function buildComponentCss(done) {
  const components = getComponentsName()
  components.forEach((name) => {
    src(`../src/${name}/style/**.less`, {
      allowEmpty: true
    })
      .pipe(less({ javascriptEnabled: true }))
      .pipe(dest(`../dist/cjs/${name}/style`))
      .pipe(dest(`../dist/esm/${name}/style`))
  })
  done()
}

function buildEntryCss(done) {
  src(`../src/style/**.less`, {
    allowEmpty: true
  })
    .pipe(less({ javascriptEnabled: true }))
    .pipe(dest(`../dist/cjs/style`))
    .pipe(dest(`../dist/esm/style`))
  done()
}

function minCss(done) {
  src(`../src/style/index.less`, {
    allowEmpty: true
  })
    .pipe(less({ javascriptEnabled: true }))
    .pipe(dest(`../dist/umd`))
    .pipe(cleancss())
    .pipe(rename('index.min.css'))
    .pipe(dest(`../dist/umd`))
    .pipe(dest(`../dist/cjs/style`))
    .pipe(dest(`../dist/esm/style`))
  done()
}

exports.default = gulp.series(buildComponentCss, buildEntryCss, minCss)
