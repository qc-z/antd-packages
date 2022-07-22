import renderer from 'react-test-renderer'
import Button from '../button'
test('按钮', () => {
  const component = renderer.create(
    <Button type="primary">按钮</Button>
  )
  const button = toJson(component)
  expect(button).toMatchSnapshot()

  // manually trigger the callback
  // tree.props.onMouseEnter()

  // re-rendering
  // tree = toJson(component)
  // expect(tree).toMatchSnapshot()

  // manually trigger the callback
})
function toJson(
  component: renderer.ReactTestRenderer
) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}
