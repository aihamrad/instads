import React, { Component } from "react";
import PopupList from "./popupList";



class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showUserList: false
    }
  }

  handleClickUser = (user) => {
    this.props.handleUser(user)
    this.handleUserListStatus()
  }

  handleUserListStatus = () => {
    this.setState((pervState) => ({
      showUserList: !pervState.showUserList
    }))
  }

  render () {
    const {numberOfItems, handleCheckoutView, showCheckout, users, selectedUser} = this.props;
    const {showUserList} = this.state
    return (
      <div className="navbar flex justify-content-between align-items-center shadow">
          <div className="logo m-s pointer"><div className="w-100">I</div></div>
          <div className="text-16 flex justify-content-end">
              {showCheckout ?
                <div className="btn navbar-btn mr-m pointer p-m" onClick={handleCheckoutView}>Home</div>
              : <div>
                  {numberOfItems > 0 && 
                  <div onClick={handleCheckoutView} className="btn navbar-btn mr-m pointer p-m"> {numberOfItems} <i className="fa fa-shopping-cart"/></div>}
                  </div>
              }
              <div className="btn navbar-btn mr-m pointer p-m relative relative">
                <div onClick={this.handleUserListStatus}>{selectedUser ? selectedUser.name : 'log in'} <i className="fa fa-chevron-down" /></div>
                {showUserList && <PopupList users={users}  selectedUser={selectedUser} handleClickUser={this.handleClickUser}/>}
              </div>
          </div>
      </div>
    );
  }
}

export default Navbar;
