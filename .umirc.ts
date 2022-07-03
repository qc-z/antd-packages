import { defineConfig } from "dumi";

export default defineConfig({
  // 网站描述配置
  mode: "site",
  title: "antd-lib Library",
  favicon: "/images/logo.svg",
  logo: "/images/logo.svg",
  description: "用于Biz Web Dev 前端组件开发。",
  // 打包路径配置
  // base: '/mydocs',
  // publicPath: '/mydocs/', // 打包文件时，引入地址生成 mydocs/xxx.js
  outputPath: "docs-dist",
  exportStatic: {}, // 对每隔路由输出html
  dynamicImport: {}, // 动态导入

  hash: true, //加hash配置，清除缓存
  manifest: {
    fileName: "manifest.json",
  },
  // mfsu
  mfsu: {},
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
  ],
  alias: {
    'antd-lib/es': '*/src',
  }
  // more config: https://d.umijs.org/config
});
