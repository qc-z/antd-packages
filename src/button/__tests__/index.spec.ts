import {
  assert,
  describe,
  it,
  expect,
  test
} from 'vitest'
import '@testing-library/jest-dom'
import Button from '../button'
import React from 'react'
import renderer from 'react-test-renderer'
console.log(Button)
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

function toJson(
  component: renderer.ReactTestRenderer
) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

// test.skip('Link changes the class when hovered', () => {
//   const component = renderer.create(
//     <Button>22</Button>
//   )
//   let tree = toJson(component)
//   expect(tree).toMatchSnapshot()

//   // manually trigger the callback
//   tree.props.onMouseEnter()

//   // re-rendering
//   tree = toJson(component)
//   expect(tree).toMatchSnapshot()

//   // manually trigger the callback
//   tree.props.onMouseLeave()
//   // re-rendering
//   tree = toJson(component)
//   expect(tree).toMatchSnapshot()
// })
