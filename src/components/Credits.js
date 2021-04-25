import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';

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
  handleChange = (e) => {
    
    const updatedItem = {...this.state.item};
    const inputValue = e.target.value;
    const inputField = e.target.name;

    updatedItem[inputField] = inputValue;

    this.setState({
      item: updatedItem
    });
  }

  //handleSubmit to be done
  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {...this.state.item};
    if(newItem.description === ''){
      prompt('Please enter a description');
      return;
    }
    if(newItem.amount === 0){
      prompt('Please enter a valid amount!');
      return;
    }
    this.props.addCredit(newItem);
  }

  //gets date and time
  getDateAndTime = () => {
    var today = new Date();
    var date = (today.getMonth()+1)+ '-' + today.getDate() + '-' + today.getFullYear();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date + " " + time;
    document.getElementById("currentDateTime").value = dateTime;
  }


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
          <Link to="/UserProfile">User Profile</Link>
        </div>
        <div>
          <Link to="/Debits">Debits</Link>
        </div>

        

        <div className= "add-credits-area">
          <form onSubmit = {this.handleSubmit}>
            <div>
              <label htmlFor="description">Description: </label>
              <input type="text" name="description" onChange={this.handleChange} value={this.state.description} />
            </div>
            <div>
              <label htmlFor="amount">Amount: </label>
              <input type="number" name="amount" onChange={this.handleChange} value={this.state.amount}/>
            </div>
            <div>
              <label>Time: </label>
              <input type="text" id="currentDateTime"></input>
            </div>
            <button>Add Credit</button>
          </form>
        </div>

        <div className = "credits-display-area">
          <AccountBalance accountBalance={this.props.accountBalance}/> 
          <h2>Credits:</h2>
          <div className = "credit-info">
            {/*{this.props.credits.map((index) => {*/}
              {/*return(*/}
                {/*<div key={index}>*/}
                  {/*<h4>Description: {credits.description}</h4>*/}
                  {/*<p>Amount: ${credits.amount}</p>*/}
                  {/*<p>Date: {credits.date}</p>*/}
                {/*</div>*/}
              {/*)*/}
            {/*})}*/}
          </div>
        </div>
      </div>
    )
  }
}

export default Credits;
