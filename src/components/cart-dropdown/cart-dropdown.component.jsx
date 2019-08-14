import React from 'react';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selectCartItems} from '../../redux/cart/car.selectors';
import CustomButton from '../custom-button/custom-button.component';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length > 0 ?
                    cartItems.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))
                :  <span className='empty-message'>
                        Your car is empty
                    </span>
        }
        </div>
        <CustomButton onClick={ () => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
