import React from 'react'
import { Container } from 'react-bootstrap';
import data from './cardPeopleData.json';
import CardPerson from './CardPerson';

const Body = () => {
  return (
    <Container className="d-flex flex-wrap justify-content-between card-people__row">
      {data.map( element => {
        return <CardPerson photo={element.photo} name={element.name} text={element.text} align={element.align}/>
      })}
    </Container>
  )
}

export default Body
