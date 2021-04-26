import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1 className="title">User Profile</h1>
          <div className="user-info-display-area">
            <div>Username: {this.props.userName}</div>
            <div>Member Since: {this.props.memberSince}</div>
          </div>
          <div className="home-links">
            <div>
              <Link to="/">Return to Home</Link>
            </div>
            <div>
              <Link to="/Login">Log In</Link>
            </div>
          </div>
          
        </div>
    );
  }
}

export default UserProfile;
