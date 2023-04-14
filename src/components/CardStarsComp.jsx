import React from 'react';
import star from '../assets/icon-star.svg';
import { Row, Col } from 'react-bootstrap';

const CardStarsComp = (props) => {
  return (
    <Row className={`justify-content-xs-center ${props.justify}`}>
      <Col xs={12} sm={12} md={12} lg={6} xl={11} className="pt-2 my-2 card-stars">
        <Row className="justify-content-center">
          <Col xs ={5} sm={4} md={6} lg={12} xl={4}>
            <div style={{display: "flex", justifyContent: "space-between "}}>
              <img className="px-2" src={star} />
              <img className="px-2" src={star} />
              <img className="px-2" src={star} />
              <img className="px-2" src={star} />
              <img className="px-2" src={star} />
            </div>
          </Col>
          <Col sm={12} md={12} lg={8}>
            <p className="pt-1 card-stars__text">{props.text}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CardStarsComp
