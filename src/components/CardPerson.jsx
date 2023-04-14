import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import ColtonPhoto from "../assets/image-colton.jpg";
import IrenePhoto from "../assets/image-irene.jpg";
import AnnePhoto from "../assets/image-anne.jpg";

const CardPerson = ({ photo: profilePhoto, name, text, align }) => {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const photos = {
      colton: ColtonPhoto,
      irene: IrenePhoto,
      anne: AnnePhoto,
    };
    setPhoto(photos[profilePhoto]);
  }, [profilePhoto]);

  return (
    <div className={`card-people__container me-2 py-4 px-4 ${align}`}>
      <Row>
        <Col xs={2} sm={2} lg={2}>
          <Image src={photo} roundedCircle width="40" />
        </Col>
        <Col>
          <p className="card-people__name">
            {name} <br /> <span>Verified Buyer</span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="card-people__text">"{text}"</p>
        </Col>
      </Row>
    </div>
  );
};

export default CardPerson;
