import React, {Component} from 'react'
import { Form } from 'react-bootstrap'

class NewCat extends Component{
  constructor(props){
    super(props)
    this.state = {
      form: {
        name:'',
        age:'',
        enjoys:''
      }
    }
  }
  handleChange(event){
    let {form} = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  render(){
    return(
      <div>
        <Form.Control
          type="text"
          name="name"
          onChange={this.handleChange.bind(this)}
          value={this.state.form.name}
          />
          <label for="name" id="name">Name
            <input type="text" id="name" placeholder="name"/>
          </label>
          <label for="age" id="age">Age
            <input type="number" id="age" placeholder="1"/>
          </label>
          <label for="enjoys" id="enjoys">Enjoys
            <input type="text" id="enjoys" placeholder="enjoys"/>
          </label>
          <button type="submit" id="submit">Create Cat Profile</button>
  
      </div>
    )
  }
}
export default NewCat
