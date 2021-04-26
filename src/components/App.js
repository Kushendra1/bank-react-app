import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';
import LogIn from './Login.js';
import Debits from './Debits.js';
import Credits from './Credits.js';
import axios from "axios";
import './App.css';


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
    this.addCredit = this.addCredit.bind(this);
  }

  async componentDidMount(){
    let debitsResponse = await axios.get("https://moj-api.herokuapp.com/debits");
    let credits = await axios.get("https://moj-api.herokuapp.com/credits");

    let debitsArr = debitsResponse.data;
    let creditsArr = credits.data;

    let debitTotal = 0;
    let creditTotal = 0;

      debitsArr.forEach((debit) => {
      debitTotal += debit.amount
    })

      creditsArr.forEach((credit) => {
      creditTotal += credit.amount
    })

    const accountBalance = creditTotal - debitTotal;
      console.log(debitTotal);

      console.log(debitsArr);

     this.setState({debits: debitsArr, credits: creditsArr});
  }

  //Debits.js has the item. This function pushes it to a debit array and updates balance
  addDebit = (item) => {

      if(this.state.debits!== '' && item!== undefined) {
          let newArray =  this.state.debits;
          newArray.push(item);
          this.setState({accountBalance: Number(this.state.accountBalance) + Number(item.amount)});
          this.setState({debits: newArray});
      }
  }

  addCredit = (item) => {
    if(this.state.credits!== '' && item!== undefined) {
        let newArray =  this.state.credits;
          newArray.push(item);
          this.setState({accountBalance: Number(this.state.accountBalance) - Number(item.amount)});
          this.setState({credits: newArray});
    }
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
    const DebitsComponent = () => (<Debits accountBalance={this.state.accountBalance} debits={this.state.debits} addDebit={this.addDebit}/>);
    const CreditsComponent = () => (<Credits accountBalance={this.state.accountBalance} credits={this.state.credits} addCredit={this.addCredit}/>);

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/UserProfile" render={UserProfileComponent}/>
            <Route exact path="/Login" render={LogInComponent}/>
            <Route exact path="/Debits" render={DebitsComponent}/>
            <Route exact path="/Credits" render={CreditsComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;
