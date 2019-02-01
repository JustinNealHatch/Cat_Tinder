import React, { Component } from 'react'
import {
 Container, Col, Row, ListGroup, Card
} from 'react-bootstrap'

class Cats extends Component {
  render() {
    console.log('cats',this.props.cats);
    return(
      <Container>
        <Row>
          <Col xs={12}>
                    <ListGroup>
                    {this.props.cats.map((cat, index) =>{
                      return (
                        <div key={index}>
                        <Card  style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={cat.url}></Card.Img>
                          <Card.Body>
                            <Card.Title>{cat.name}</Card.Title>
                            <Card.Subtitle>{cat.age}</Card.Subtitle>
                            <Card.Text>{cat.enjoys}</Card.Text>
                          </Card.Body>
                        </Card>
                        </div>
                      )
                    })}
                    </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Cats
