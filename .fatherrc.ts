export default {
  entry: 'src/index.ts',
  esm: 'babel',
  cjs: 'babel',
  umd: {
    name: 'antd-packages',
    globals: {
      react: 'React',
      antd: 'antd',
      'react-dom': 'ReactDOM'
    }
  },
  extraExternals: ['antd'],
  extractCSS: true,
  lessInBabelMode: true,
  extraRollupPlugins: [],
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }
    ]
  ]
}
