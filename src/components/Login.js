import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './App.css';

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/userProfile"/>)
    }

    return (
      <div className= "add-credits-area">
        <h1 className="title">User Login</h1>
        <form onSubmit={this.handleSubmit} className="add-credits-form">
          <div>
            <label htmlFor="userName">User Name: </label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
          </div>
          <button className="submit-btn-debit">Log In</button>
        </form>
      </div>
    )
  }
}

export default LogIn
