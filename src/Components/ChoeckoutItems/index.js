import React from 'react';

const ChoeckoutItems = ({item, index, handleItemValue }) => {
    return (    
        <div key={index} className={'flex justify-content-center align-items-center pv-m b-b'}>
            <div onClick={() => handleItemValue(item.quantity, index, - item.quantity)} className="fa fa-trash ic-trash p-m"/>
            <button onClick={() => handleItemValue(item.quantity, index, -1)} className='btn btn-white border-primary radius-5 mr-s p-m'>-</button>
            <div type='number' className='text-center p-m text-s'>{item.quantity}</div>
            <button onClick={() => handleItemValue(item.quantity, index, 1)} className='btn btn-primary radius-5 mr-s p-m text-white'>+</button>
            <div className='p-m'>
                <div>{item.name}</div>
                <div className='text-s text-grey'>Price: {item.price_per_unit}</div>
            </div>
        </div>
    )
}

export default ChoeckoutItems