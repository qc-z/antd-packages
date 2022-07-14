import { Button } from 'antd'

const MyButton = (props: {
  [x: string]: any
  children: any
}) => {
  const { children, ...restProps } = props

  return (
    <Button {...restProps} className="my-button">
      {children}
    </Button>
  )
}
export default MyButton
