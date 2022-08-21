import fs from 'fs'
const source = fs.readFileSync('node_modules/antd/es/affix/index.d.ts', 'utf-8')
const $ = require('gogocode')
const outCode = $(source).replace(`interface`, `var c = 1`)

console.log(outCode)
