import React, { Component } from 'react'
import {
 Container, Col, Row, ListGroup, ListGroupItem
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
                          <h4>
                            <span className='cat-name'>
                            {cat.name}
                            </span>
                            - <small className='cat-age'>{cat.age} years old</small>
                          </h4>
                          <span className='cat-enjoys'>
                            {cat.enjoys}
                          </span>
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
