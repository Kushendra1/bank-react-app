import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';


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
  handleChange = (e) => {
    
    const updatedItem = {...this.state.item};
    const inputValue = e.target.value;
    const inputField = e.target.name;

    updatedItem[inputField] = inputValue;

    this.setState({
      item: updatedItem
    });
  }
  
  //handleSubmit func to be done
  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {...this.state.item};
    if(newItem.description === ''){
      prompt('Please enter a description!');
      return;
    }
    if(newItem.amount === 0){
      prompt('Please enter a valid amount!');
      return;
    }
    newItem.date = this.getDateAndTime();
    // itemDate.setState(getDateAndTime());
    this.props.addDebit(newItem);
  }

  getDateAndTime = () =>  {
    var today = new Date();
    var date = (today.getMonth()+1)+ '-' + today.getDate() + '-' + today.getFullYear();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date + " " + time;
    
    return dateTime;
    
  }
  //complete render and return
  render() {
       console.log(this.props.debits.length);
      this.props.debits.map(debt => {
         console.log(debt);
      });
    return (
      <div>
        <div>
          <h1>Debits</h1>
        </div>
          <h3>Display Debit</h3>
          <table>
              <tr>
                  <th> Description</th>
                  <th> Amount</th>
                  <th> Date</th>
              </tr>

          {this.props.debits.map(debt => {
              return <tr key={debt.id}>
                  <td>{debt.description}</td>
                  <td>{debt.amount}</td>
                  <td> {debt.date}</td>
                  </tr>

          })}
          </table>
          <h3>Amount Display</h3>

          <AccountBalance accountBalance={this.props.accountBalance}/>

          <div>
          <div className= "add-debits-area">
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
              <label htmlFor="date">Date: {this.getDateAndTime()}</label>
              
            </div>
            
            <button>Add Debit</button>
          </form>
        </div>
        </div>

        <footer>
              <div>
                  <nav>
                      <ul>
                          <Link to="/">Home &emsp;&emsp;</Link>
                          <Link to="/Login">Log In &emsp;&emsp;</Link>
                          <Link to="/UserProfile">User Profile &emsp;&emsp;</Link>
                          <Link to="/Credits">Credits &emsp;&emsp;</Link>
                      </ul>
                  </nav>
              </div>
          </footer>

      </div>
    )
  }
}


export default Debits;
