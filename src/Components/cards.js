import React from 'react';
const COLORS = ['#a6ffbe', '#ffdda6', '#ffa6bb']
const Cards = ({item, index, handleAddItem, showAddBtn, handleItemValue, handleOnChange}) => {
    return (
        <div className='card flex flex-column justify-content-between shadow radius-5 p-m'>
            <div>
                <div className='card-header flex justify-content-center align-items-center mb-s radius-5' style={{'backgroundColor':COLORS[index]}}>
                    {item.name}
                </div>
                <div className='text-12 text-grey mb-s'>{item.desc}</div>
            </div>
            <div>
                <div className='text-12 text-grey mb-s'>Price per unit: {item.price_per_unit} {item.currency}</div>
                {showAddBtn ? 
                    <button onClick={handleAddItem} className='btn btn-primary pv-m w-100 radius-5'>Add</button> 
                    : <div className='text-center flex justify-content-center text-15 pv-m text-primary'>
                        <button onClick={() => handleItemValue(item.quantity, index, -1)} className='btn btn-white border-primary radius-5 mr-s p-m'>-</button>
                        <input onChange={(e) => handleOnChange(e, index)} type='number' className='mr-s text-center' value={item.quantity}/>
                        <button onClick={() => handleItemValue(item.quantity, index, 1)} className='btn btn-primary radius-5 mr-s p-m text-white'>+</button>
                    </div>
                }
            </div>
        </div>
    )
}
export default Cards