import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import data from './cardStars.json';
import CardStarsComp from './CardStarsComp';

const Header = () => {
  return (
    <Container className="header-container" style={{marginBottom: "50px",}}>
      <Row>
        {/* col de encabezado */}
        <Col>
          <Row>
            <Col sm={12} lg={8}>
              <h1 className="header__title">10,000+ of our users love our products</h1>
            </Col>
            <Col className="header__subtitle" md={12} lg= {10}>
              We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
            </Col>
          </Row>
        </Col>
        {/* col de cards */}
        <Col sm={12} lg={5}className="align-items-center">
          {data.map( element => { 
            return <CardStarsComp justify={element.justify} text={element.text} />
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default Header
