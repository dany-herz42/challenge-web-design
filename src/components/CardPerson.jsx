import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ColtonPhoto from '../assets/image-colton.jpg';
import IrenePhoto from '../assets/image-irene.jpg';
import AnnePhoto from '../assets/image-anne.jpg';

const CardPerson = (props) => {
  const [photo, setphoto] = useState(null)
  useEffect(() => {
    switch (props.photo) {
      case "colton":
        setphoto(ColtonPhoto)
        break;
      case "irene":
        setphoto(IrenePhoto)
        break;
      case "anne":
        setphoto(AnnePhoto)
        break;
      default:
        break;
    }
  }, [props.photo])
  return (
    <div className={`card-people__container me-2 py-4 px-4 ${props.align}`}>
      <Row>
        <Col xs={2} sm={2} lg={2}>
          <Image src={photo} roundedCircle width="40" />
        </Col>
        <Col>
          <p className="card-people__name">{props.name} <br /> <span>Verified Buyer</span></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="card-people__text">"{props.text}"</p>
        </Col>
      </Row>
    </div>
  )
}

export default CardPerson
