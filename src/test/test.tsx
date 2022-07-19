import React, { useState } from 'react'

export type TestProps = {
  name: string
}

const Test: React.FC = () => {
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

export default Test
