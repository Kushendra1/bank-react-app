import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Debits extends Component {

  constructor() {
    super()
    this.state = {
      item: {
        description: '',
        amount: 0,
        date: ''
      }
    }
  }

  //handlechange func to be done
  //handleSubmit func to be done
  //complete render and return
  render() {
    return (
      <div>
        <div>
          <h1>Credits</h1>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Login">Log In</Link>
        </div>
        <div>
          <Link to="/userProfile">User Profile</Link>
        </div>
        <div>
          <Link to="/Crebits">Crebits</Link>
        </div>

      </div>
    )
  }
}


export default Debits;
