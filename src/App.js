import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { getCats, createCat } from './api/index'

import Header from './components/Header'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [],
      newCatSuccess: false
    }
  }

  componentWillMount() {
    getCats().then(APIcats =>{
      this.setState({cats: APIcats})
    })
  }

  handleNewCat = (newCatInfo) => {
	createCat(newCatInfo)
    .then(successCat => {
        console.log("SUCCESS! New cat: ", successCat);
        this.setState({
          newCatSuccess: true
        })
    })
}

  // handleNewCat = (newcat) => {
  //   const {cats} = this.state
  //   let newId = cats.length+1
  //   newcat.id = newId
  //   cats.push(newcat)
  //   this.setState({cats:cats})
  //   console.log("cats after push",cats)
  //
  // }


  render() {
    let {cats} = this.state
    console.log("cats render",cats)
    return (
      <div>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/cats" render={(props) => <Cats cats={this.state.cats} />} />
            <Route exact path="/newcat" render={(props)=><NewCat onSubmit={this.handleNewCat}  cats={this.state.cats} success={this.state.newCatSuccess}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
