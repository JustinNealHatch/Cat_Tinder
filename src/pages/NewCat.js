import React, {Component} from 'react'
import { Form, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Cats from './Cats'

class NewCat extends Component{
  constructor(props){
    super(props)
    this.state = {
      form: {
        name:'',
        age:'',
        enjoys:'',
        url:''
      }
    }
  }
  handleChange(event){
    let {form} = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
    console.log("form",form)
    console.log("this.props.cats",this.props.cats)
  }

  addNewCat= (e)=>{
    e.preventDefault()
    this.props.onSubmit(this.state.form)
  }

  render(){
    return(
      <div>
        <Form style={{width: "50vw", margin: "auto"}}>
          <Form.Group controlId="formName">
            <Form.Label id="name">Name</Form.Label>
            <Form.Control
            type="text"
            name="name"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.name}
            />
          </Form.Group>
          <Form.Group controlId="formAge">
            <Form.Label id="age">Age</Form.Label>
            <Form.Control
            type="number"
            name="age"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.age}
            />
          </Form.Group>
          <Form.Group controlId="formEnjoys">
            <Form.Label id="enjoys">Enjoys</Form.Label>
            <Form.Control
            as="textarea"
            rows="3"
            name="enjoys"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.enjoys}
            />
          </Form.Group>
          <Form.Group controlId="formUrl">
            <Form.Label id="url">Picture URL</Form.Label>
            <Form.Control
            type="text"
            name="url"
            onChange={this.handleChange.bind(this)}
            value={this.state.form.url}
            />
          </Form.Group>

          <Button type="submit" id="submit" onClick={this.addNewCat}>Create Cat Profile</Button>

        </Form>
        {this.props.success && <Redirect to="/cats"/> }

      </div>
    )
  }
}
export default NewCat
