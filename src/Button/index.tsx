import React from 'react'
import { Button } from 'antd'

const MyButton = (props: {
  [x: string]: any
  children: any
  tip: any
}) => {
  const { children, tip, ...restProps } = props
  return (
    <Button
      className="my-button"
      {...restProps}
      title={tip}
    >
      {children}
    </Button>
  )
}

export default MyButton
