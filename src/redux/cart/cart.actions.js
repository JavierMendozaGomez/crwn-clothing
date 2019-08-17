import CartActionTypes from './car.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const decreaseQuantity = item => ({
    type: CartActionTypes.DECREASE_QUANTITY,
    payload: item
});

export const removeItem = id => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: id
});
