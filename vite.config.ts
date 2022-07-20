/// <reference types="vitest" />

import {
  defineConfig,
  configDefaults
} from 'vitest/config'

export default defineConfig({
  esbuild: {
    jsxInject: "import React from 'react'"
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    exclude: [
      ...configDefaults.exclude,
      'ant-docs'
    ]
  }
})
