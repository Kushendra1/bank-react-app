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
  //handleSubmit func to be done
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
