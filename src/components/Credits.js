import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Credits extends Component {

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
  //handleSubmit to be done
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
          <Link to="/Debits">Debits</Link>
        </div>
      
      </div>
    )
  }
}

export default Credits;