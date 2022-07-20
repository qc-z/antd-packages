import React, { useState } from 'react'

export type TooltipButtonProps = {
  name: string
}

const TooltipButton: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        点击+1
      </button>
    </div>
  )
}

export default TooltipButton
