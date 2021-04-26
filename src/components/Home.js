import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import "./App.css";

class Home extends Component {
  render() {
    return (
        <div>
          
          <h1 className="title">Bank of React</h1>
          <div className="home-links">
            <div className="link">
              <Link to="/userProfile">User Profile</Link>
            </div>
            <div className="link">
              <Link to="/Login">Log In</Link>
            </div>
            <div className="link">
              <Link to="/Debits">Debits</Link>
            </div>
            <div className="link">
              <Link to="/Credits">Credits</Link>
            </div>
          </div>
          
          <div className="account-balance">
            <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>
          
        </div>
    );
  }
}

export default Home;
