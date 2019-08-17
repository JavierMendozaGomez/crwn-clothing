import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {
    addItem,
    decreaseQuantity,
    removeItem
} from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, addItem, decreaseQuantity, removeItem}) => {
    const {name, imageUrl, price, quantity, id} = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItem(id)}>&#10005;</div>
        </div>
    );
};

export default connect(null, {
    addItem,
    decreaseQuantity,
    removeItem
})(CheckoutItem);
