import React from 'react';
import ChoeckoutItems from '../Components/ChoeckoutItems';

const Checkout = ({showAddMore, totalPrice, ads, handleCheckoutView, handleItemValue}) => {

    return (
        <div className='shadow radius-5 p-m mv-m'>
            {showAddMore && <button className="btn btn-white border-primary pv-m radius-5 w-100" onClick={handleCheckoutView}>+ Add more</button>}
            <div>{ads.map((item, index) => 
            <div key={index}>
              { item.quantity > 0 && <ChoeckoutItems item={item} index={index} handleItemValue={handleItemValue} /> }
            </div>
            )}
            </div>
            <div className="pv-m text-s text-grey text-talic">
                Items list:
                {ads.filter((item) => item.quantity > 0).map((item, index) => <div key={index} className="mb-s">+ {item.quantity} {item.name}</div>)}
                <div className="pt-m b-t">Estimated Price: {totalPrice.toFixed(2)}RM</div>
            </div>
            <button className="btn btn-primary pv-m radius-5 w-100" >Pay {totalPrice.toFixed(2)}</button>
        </div>
    )
}

export default Checkout