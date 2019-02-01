import React, {Component} from 'react'
import { Navbar, Nav} from 'react-bootstrap'

class Header extends Component{
  render() {
    return(
      <div>
        <Navbar bg="light">
          <Nav style={{margin: "auto"}}>
            <Nav.Link href="/newcat" style={{backgroundColor: "darksalmon"}}>Add New Cat</Nav.Link>
            <Nav.Link href="/cats" style={{backgroundColor: "aliceblue"}}>Cat List</Nav.Link>
          </Nav>
        </Navbar>

      </div>
    )
  }
}

export default Header;
