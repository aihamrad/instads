import React, { Component } from "react";
import update from "react-addons-update";
import Cards from "../../Components/cards";
import data from "../../json/adsTypes.json";
import Checkout from "../checkout";
import { promotions, promotionsText } from "../../modules/functions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: [],
      numberOfItems: 0,
      totalPrice:0
      
    };
  }

  componentDidMount= () => {
      this.setState({
        ads: data.ads
      })
  }

  handleAddItembtn = (index) => {
    this.setState({
      ads: update(this.state.ads, {[index] : {quantity : {$set :  1}}})
    }, () => {
      this.selectedItems()
    })
  }

  handleItemValue = (prevValue, index, value) => {
    this.setState({
      ads: update(this.state.ads, {[index] : {quantity : {$set : prevValue + value }}})
    }, () => {
        this.selectedItems()
    })
  }

  handleOnChange = (e, index ) => {
    let value = " "
    if (e.target.value) {
      value = parseInt(e.target.value)
    }
      this.setState({
        ads: update(this.state.ads, {[index] : {quantity : {$set : value }}})
      }, () => {
          this.selectedItems()
      })
  }

  selectedItems = () => {
      const selectedItems = this.state.ads.filter((item) => item.quantity && item.quantity > 0)
      const numberOfItems = selectedItems.reduce((prev, current) => prev + current.quantity, 0);
      const totalPrice = promotions(this.props.selectedUser, this.state.ads)
      this.setState({
        numberOfItems,
        totalPrice
      }) 
      if(numberOfItems === 0) {
        this.props.handleHomePageShow()
      }
      this.props.handleSelectedItems(numberOfItems)
    }




  render() {
    const { ads, numberOfItems, totalPrice } = this.state;
    const {handleCheckoutView, showCheckout, selectedUser } = this.props
    const showAddMore = ads.filter((item) => item.quantity > 0).length < ads.length
    return (
      <div>
       {selectedUser && promotionsText(selectedUser) && 
        <div className="white-space bg-info bl-blue text-blue p-m text-white m-m c">
            <div>Promotions:</div>
            {promotionsText(selectedUser)}
          </div>
        }
        {!showCheckout ? <div className="m-m">
          <div className="dynamic-flex justify-content-between align-items-center">
          {ads.map((item,index) => 
            <Cards 
              item={item} 
              index={index}
              showAddBtn={!item.quantity || item.quantity  === 0}
              handleItemValue={this.handleItemValue}
              handleOnChange={this.handleOnChange}
              handleAddItem={() => this.handleAddItembtn(index)}/>
              )}
          </div>
          {numberOfItems > 0 && <button onClick={handleCheckoutView} className="btn btn-primary w-100 p-m radius-5 mt-m">View shopping cart </button>}
          </div>
          : 
          <div className="m-m">
          <Checkout 
            showAddMore={showAddMore} 
            totalPrice={totalPrice} 
            ads={ads} 
            handleCheckoutView={handleCheckoutView} 
            handleItemValue={this.handleItemValue} 
            user={selectedUser}
            />
            </div>
          }
        </div>
    );
  }
}
export default Home;
