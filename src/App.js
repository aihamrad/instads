import React, { Component } from 'react';
import './assets/main.scss';
import Home from './routes/Home'
import Navbar from './routes/Navbar';
import data from "./json/users.json"
import Login from './routes/Login';

class App extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      numberOfItems: 0,
      showCheckout: false,
      selectedUser:''
    }
  }

  handleSelectedItems = (numberOfItems) => {
    this.setState({
      numberOfItems
    })
  }

  handleCheckoutView = () => {
    this.setState((prevState) => ({
      showCheckout: !prevState.showCheckout
    }))
  }

  handleHomePageShow = () => {
    this.setState({
      showCheckout: false
    })
  }

  handleUser = (user) => {
    if (user === '') {
      window.location.reload();
    }
    this.setState({
      selectedUser: user
    })
  }

  render() {
    const {numberOfItems, showCheckout, selectedUser} = this.state
    return (
      <div>  
        <Navbar selectedUser={selectedUser} numberOfItems={numberOfItems} handleUser={this.handleUser} users={data.users} showCheckout={showCheckout} handleCheckoutView={this.handleCheckoutView} />
        <div className="container cursor-default">
        {selectedUser && <Home selectedUser={selectedUser} handleSelectedItems={this.handleSelectedItems} showCheckout={showCheckout} handleCheckoutView={this.handleCheckoutView} handleHomePageShow={this.handleHomePageShow} />}
        {!selectedUser && <Login users={data.users} handleUser={this.handleUser}/>}     
        </div>
      </div>  
    )
  }};

export default App;
