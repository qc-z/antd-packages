/**
 * title: 联动
 * desc: 省市联动是典型的例子。推荐使用[Cascader](/components/cascader/)组件。
 */

import { Select } from 'antd-packages'
import React, { useState } from 'react'

const { Option } = Select
const provinceData = ['Zhejiang', 'Jiangsu']
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
}

type CityName = keyof typeof cityData

const App: React.FC = () => {
  const [cities, setCities] = useState(
    cityData[provinceData[0] as CityName]
  )
  const [secondCity, setSecondCity] = useState(
    cityData[provinceData[0] as CityName][0]
  )

  const handleProvinceChange = (
    value: CityName
  ) => {
    setCities(cityData[value])
    setSecondCity(cityData[value][0])
  }

  const onSecondCityChange = (
    value: CityName
  ) => {
    setSecondCity(value)
  }

  return (
    <>
      <Select
        defaultValue={provinceData[0]}
        style={{ width: 120 }}
        onChange={handleProvinceChange}
      >
        {provinceData.map((province) => (
          <Option key={province}>
            {province}
          </Option>
        ))}
      </Select>
      <Select
        style={{ width: 120 }}
        value={secondCity}
        onChange={onSecondCityChange}
      >
        {cities.map((city) => (
          <Option key={city}>{city}</Option>
        ))}
      </Select>
    </>
  )
}

export default App
