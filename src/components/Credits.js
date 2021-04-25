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
    console.log(newItem);
    if(newItem.description === ''){
      prompt('Please enter a description');
      return;
    }
    if(newItem.amount === 0){
      prompt('Please enter a valid amount!');
      return;
    }
    // this.setState(item=> {item.date: getDateAndTime()})
    this.props.addCredit(newItem);
  }

  //gets date and time
  getDateAndTime = () => {
    var today = new Date();
    var date = (today.getMonth()+1)+ '-' + today.getDate() + '-' + today.getFullYear();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date + " " + time;
    document.getElementById("currentDateTime").value = dateTime;
    console.log(dateTime);
  }


  //complete render and return
  render() {
    return (
      <div>
        <div>
          <h1>Credits</h1>
            <div className = "credits-display-area">
                <h3>Display Credit</h3>
              <table>
                    <tr>
                        <th> Description</th>
                        <th> Amount</th>
                        <th> Date</th>
                    </tr>
                    {this.props.credits.map(credit => {
                        return <tr key={credit.id}>
                            <td>{credit.description}</td>
                            <td>{credit.amount}</td>
                            <td>{credit.date}</td>
                        </tr>

                    })}
                </table>
            </div>
          <div>
                <h3>Amount Display</h3>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            <br/>
          </div>
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
            <button>Add Credit</button>
          </form>
        </div>

          <footer>
              <div>
                  <nav>
                      <ul>
                          <Link to="/">Home &emsp;&emsp;</Link>
                          <Link to="/Login">Log In &emsp;&emsp;</Link>
                          <Link to="/UserProfile">User Profile &emsp;&emsp;</Link>
                          <Link to="/Debits">Debits &emsp;&emsp;</Link>
                      </ul>
                  </nav>
              </div>
          </footer>


      </div>
    )
  }
}

export default Credits;
