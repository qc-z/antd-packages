import { Button } from 'antd'
import type { ButtonProps } from './index.d'
export { ButtonProps } from './index.d'

const MyButton = (props: ButtonProps) => {
  const { children, ...restProps } = props

  return (
    <Button {...restProps} className="my-button">
      {children}
    </Button>
  )
}
export default MyButton
