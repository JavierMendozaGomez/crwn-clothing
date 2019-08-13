import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, count}) => (
    <div className='cart-icon'  onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{count}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({cart: {cartItems}}) => ({
    count: cartItems.reduce((totalCount, items) => (totalCount + items.quantity), 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
