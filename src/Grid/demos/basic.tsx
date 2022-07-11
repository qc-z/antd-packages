
/**
  * title: 基础栅格
  * desc: 从堆叠到水平排列。使用单一的一组`Row`和`Col`栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在`Row`内。
  */ 

import { Col, Row } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <>
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>
);

export default App;
