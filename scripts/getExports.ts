// import fs from 'fs'
// import path from 'path'
// const source = fs.readFileSync('node_modules/antd/es/button/index.d.ts', 'utf-8')
// const $ = require('gogocode')
// // const ast = $(source)
// // console.log(ast)
// // const test1 = ast.find('export').generate()

// const source = fs.readFileSync(path.resolve(__dirname, './test.d.ts'), 'utf-8')
// // console.log(source)
// // console.log(source1)
// const ast = $(source)

// // const test1 = ast.find('functio$_$0')
// const fns = ast.find('export { $_$0 }')
// // const names: any[] = []
// // fns.each((fnNode: { match: { value: any }[][] }) => {
// //   const fnName = fnNode.match[0][0].value
// //   names.push(fnName)
// // })
// // const code = names.join(',')
// const names: any[] = []
// fns.each((fnNode: { match: { value: any }[][] }) => {
//   const fnName = fnNode.match[0][0].value
//   names.push(fnName)
// })
// console.log(names.join(','))
// 获取类型定义为CheckBoxProps的语句

const $ = require('gogocode')
import fs from 'fs'
import path from 'path'
const code = fs.readFileSync(path.resolve(__dirname, './test.d.ts'), 'utf-8')

// 匹配 ExportNameDeclaration 语句
const fns = $(code).find()
// const names = []
// fns.each((fnNode) => {
//   const fnName = `${fnNode.match[0][0].value},${fnNode.match[1][0].value},${fnNode.match[2][0].value}`
//   names.push(fnName)
// })

console.log(fns.generate())
