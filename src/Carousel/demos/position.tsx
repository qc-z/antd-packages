/**
 * title: 位置
 * desc: 位置有4个方向。
 */

import type { RadioChangeEvent } from 'antd-packages'
import { Carousel, Radio } from 'antd-packages'
import type { DotPosition } from 'antd-packages/lib/carousel'
import React, { useState } from 'react'

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79'
}

const App: React.FC = () => {
  const [dotPosition, setDotPosition] =
    useState<DotPosition>('top')

  const handlePositionChange = ({
    target: { value }
  }: RadioChangeEvent) => {
    setDotPosition(value)
  }

  return (
    <>
      <Radio.Group
        onChange={handlePositionChange}
        value={dotPosition}
        style={{ marginBottom: 8 }}
      >
        <Radio.Button value="top">
          Top
        </Radio.Button>
        <Radio.Button value="bottom">
          Bottom
        </Radio.Button>
        <Radio.Button value="left">
          Left
        </Radio.Button>
        <Radio.Button value="right">
          Right
        </Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  )
}

export default App
