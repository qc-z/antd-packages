import {
  defineConfig,
  configDefaults
} from 'vitest/config'

export default defineConfig({
  esbuild: {
    jsxInject: "import React from 'react'"
  },
  test: {
    environment: 'jsdom',
    globals: true,
    exclude: [
      ...configDefaults.exclude,
      'ant-docs'
    ]
  }
})
