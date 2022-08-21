import { defineConfig } from 'father'

export default defineConfig({
  esm: { input: 'src', output: 'es', ignores: ['src/**/demos/**'] },
  cjs: { input: 'src', output: 'lib', ignores: ['src/**/demos/**'] },
  umd: {
    entry: 'src/index.ts',
    name: 'AntdPackages',
    externals: {
      antd: 'antd'
    }
    // globals: {
    //   react: 'React',
    //   antd: 'antd',
    //   'react-dom': 'ReactDOM',
    //   'react/jsx-runtime': 'jsxRuntime'
    // }
  }
  // extraExternals: ['antd']
  // extractCSS: true,
  // lessInBabelMode: true,
  // extraRollupPlugins: []
  // extraBabelPlugins: [
  //   [
  //     'babel-plugin-import',
  //     {
  //       libraryName: 'antd',
  //       libraryDirectory: 'es',
  //       style: true
  //     }
  //   ]
  // ]
})
