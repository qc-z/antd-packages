
/**
  * title: 其他属性的响应式
  * desc: `span``pull``push``offset``order`属性可以通过内嵌到`xs``sm``md``lg``xl``xxl`属性中来使用。其中`xs={6}`相当于`xs={{span:6}}`。
  */ 

import { Col, Row } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Row>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
      Col
    </Col>
  </Row>
);

export default App;
