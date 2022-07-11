
/**
  * title: 响应式布局
  * desc: 参照Bootstrap的[响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设六个响应尺寸：`xs``sm``md``lg``xl``xxl`。
  */ 

import { Col, Row } from 'antd';
import React from 'react';

const App: React.FC = () => (
  <Row>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
      Col
    </Col>
    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
      Col
    </Col>
  </Row>
);

export default App;
