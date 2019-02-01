import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [
        {
          id: 1,
          name: 'Morris',
          age: 4,
          enjoys: "Long walks on the beach.",
          url: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire.",
          url: "https://images.pexels.com/photos/64147/cat-young-cat-playful-pet-64147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge.",
          url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
      ],
    }
  }

  handleNewCat = (newcat) => {
    const {cats} = this.state
    let newId = cats.length+1
    newcat.id = newId
    cats.push(newcat)
    this.setState({cats:cats})
    console.log("cats after push",cats)

  }


  render() {
    let {cats} = this.state
    console.log("cats render",cats)
    return (
      <div>
        <Header />
        <Router>
          <Switch>
          <Route exact path="/cats" render={(props) => <Cats cats={this.state.cats}/>} />
          <Route exact path="/newcat" render={(props)=><NewCat onSubmit={this.handleNewCat}  cats={this.state.cats}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
