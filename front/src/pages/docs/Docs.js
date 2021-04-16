import React from 'react';
import { Row, Col } from 'reactstrap';

import Widget from '../../components/Widget/Widget';

const Docs = () => (
  <div>
    <h1 className='page-title'>Что-то еще</h1>
    <Row>
      <Col xs={12} md={6}>
        <Widget title={<h5>Пустышка</h5>} close collapse>
          <p>Подробнее Пустышка</p>
          <div className='widget-padding-md w-100 h-100 text-left border rounded'>
          </div>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default Docs;
