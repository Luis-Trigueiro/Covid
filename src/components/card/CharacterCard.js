import { Card, Button, Container, Row, Col, ListGroup } from "react-bootstrap";
import { useNavigate } from 'react-router';

import PropTypes from 'prop-types'

const CharacterCard = ({ character }) => {

  const history = useNavigate()

  return (

    <Col className="my-2">
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src={character.image} />
        <Card.Body className="text-center">
          <Card.Title className="text-center">{character.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item className="text-center">Species: {character.species}</ListGroup.Item>
            <ListGroup.Item className="text-center">Gender: {character.gender}</ListGroup.Item>
            <ListGroup.Item className="text-center">Status: {character.status}</ListGroup.Item>
          </ListGroup>
          <Button onClick={() => history(`/${character.id}`)} style={{ background: "black", border: "black" }}>See more</Button>
        </Card.Body>
      </Card>
    </Col>

  )
}

CharacterCard.propTypes = {
  character: PropTypes.object
}
export default CharacterCard