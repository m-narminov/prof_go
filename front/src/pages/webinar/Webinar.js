import React from 'react';
import { Row, Col } from 'reactstrap';

import Widget from '../../components/Widget/Widget';

const Webinar = () => (
  <div>
    <h1 className='page-title'>Лекции, вебинары, СМИ</h1>
    <Row>
      <Col xs={12} md={6}>
        <Widget
          title={<h5>Курсы, чтобы вместе становиться лучше</h5>}
          close
          collapse
        >
          <p>
            Кто тебя научит? Наставничество как метод обучения. Настоящие
            истории
          </p>
          <div className='widget-padding-md w-100 h-100 text-left border rounded'>
            <iframe
              title='Кто тебя научит? Наставничество как метод обучения. Настоящие истории'
              max-width='520'
              width='100%'
              height='600'
              src='https://youtu.be/QLbo74j7aAY?list=PLcJpbyn6e-ctSFmZEjz7MXONN7AtwNun-'
              frameborder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </Widget>
      </Col>
      <Col xs={12} md={6}>
        <Widget title={<h5>Клуб Эльбрус - кто мы такие?</h5>} close collapse>
          <p>Эльбрус - клуб настоящих лидеров</p>
          <div className='widget-padding-md w-100 h-100 text-left border rounded'>
            <iframe
              title='Эльбрус - клуб настоящих лидеров'
              max-width='520'
              width='100%'
              height='600'
              src='https://www.youtube.com/watch?v=DKr6EIX2f2g&list=PLcJpbyn6e-csvMCcNjI1NwwrJCfgWLzjO&index=1&ab_channel=%D0%9A%D0%BB%D1%83%D0%B1%D0%AD%D0%BB%D1%8C%D0%B1%D1%80%D1%83%D1%81'
              frameborder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </Widget>
      </Col>
      <Col xs={12} md={6}>
        <Widget title={<h5>Мы в СМИ</h5>} close collapse>
          <p>Подробнее в СМИ</p>
          <div className='widget-padding-md w-100 h-100 text-left border rounded'>
            <iframe
              title='Подробнее в СМИ'
              max-width='520'
              width='100%'
              height='600'
              src='https://www.youtube.com/watch?v=Ww5v-J3-JQM&list=PLcJpbyn6e-cuQTc3ncXVSAkgQKePKAdod&ab_channel=%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F24'
              frameborder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </Widget>
      </Col>
      <Col xs={12} md={6}>
        <Widget title={<h5>Катя Вебер</h5>} close collapse>
          <p>Как не сойти с ума от стремительных изменений и неожиданностей?</p>
          <div className='widget-padding-md w-100 h-100 text-left border rounded'>
            <iframe
              title='Как не сойти с ума от стремительных изменений и неожиданностей?'
              max-width='520'
              width='100%'
              height='600'
              src='https://youtu.be/cCjlfDlhF9M'
              frameborder='0'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default Webinar;
