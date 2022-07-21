import {
  assert,
  describe,
  it,
  expect
} from 'vitest'
// import '@testing-library/jest-dom'

describe.skip('skipped suite', () => {
  it('test', () => {
    assert.equal(Math.sqrt(4), 3)
  })
})

describe('dom test', () => {
  it('test', () => {
    ;async () => {
      // 创建div,并设置id
      const div = document.createElement('div')
      div.id = 'adm-mask'

      // 此时div不为空
      expect(div).not.toBeNull()
      expect(div).toBeDefined()
      expect(div).toBeInstanceOf(HTMLDivElement)

      // 追加到body上
      await document.body.appendChild(div)
      const mask: HTMLElement =
        document.body.querySelector(
          '#adm-mask'
        ) as HTMLElement
      expect(mask).not.toBeNull()

      // 移除div
      div.remove()
      expect(mask).not.toBeNull()
    }
  })
})

it('快照', () => {
  const result = 'foobar'.toUpperCase()
  expect(result).toMatchSnapshot()
})
// it('内联快照', () => {
//   const result = 'foobar'.toUpperCase()
//   expect(result).toMatchInlineSnapshot()
// })
