import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login.js';
import Debits from './components/Debits.js';
import Credits from './components/Credits.js';
import axios from "axios";

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      debits: [],
      credits: []
    }

    this.addDebit = this.addDebit.bind(this);
    this.addCredit = this.addDebit.bind(this);
  }

  async componentDidMount(){
    letdebits = await axios.get("https://moj-api.herokuapp.com/debits");
    letcredits = await axios.get("https://moj-api.herokuapp.com/credits");

    debits = debits.data;
    credits = credits.data;

    let debitTotal = 0;
    let creditTotal = 0;

    debits.forEach((debit) => {
      debitTotal += debit.amount
    })

    credits.forEach((credit) => {
      creditTotal += credit.amount
    })

    const accountBalance = creditTotal - debitTotal;
    this.setState({debits, credits, accountBalance});
  }

  //Debits.js has the item. This function pushes it to a debit array and updates balance
  addDebit = (item) => {

  }

  addCredit = (item) => {

  }

  mockLogIn = (logInInfo) => {
   const newUser = {...this.state.currentUser}
   newUser.userName = logInInfo.userName
   this.setState({currentUser: newUser})
 }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const DebitsComponent = () => (<Debits accountBalance={this.setState.accountBalance} debits={this.setState.debits} addDebit={this.addDebit}/>);
    const CrebitsComponent = () => (<Crebits accountBalance={this.setState.accountBalance} crebits={this.setState.crebits} addCrebit={this.addCrebit}/>);

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/Login" render={LogInComponent}/>
            <Route exact path="/debits" render={DebitsComponent}/>
            <Route exact path="/crebits" render={CrebitsComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;
