import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import './components/Smurf.css'
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Header from './components/Header/Header'
import SmurfCard from './components/SmurfCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  } 

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res);
        this.setState({ smurfs: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();

    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res);
      this.setState({
        smurfs: res.data
      })
      this.props.history.push('/');
    })

  }

  
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} />} />
        <Route path="/smurf-form" render={props => <SmurfForm {...props} smurfs={this.state.smurfs} addSmurf={this.addSmurf} />} />
        <Route path="/smurfs/:id" render={props =>  <SmurfCard {...props} smurfs={this.state.smurfs}  /> } />
        {/* <SmurfForm /> */}
        {/* <Smurfs smurfs={this.state.smurfs} /> */}
      </div>
    );
  }
}

export default App;
