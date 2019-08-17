
export const addItemToCart = (cartItems, item) => {
    const existsCartItem = cartItems.find(
        carItem => carItem.id === item.id)
    if (existsCartItem){
        return cartItems.map(cartItem => (
            (cartItem.id === item.id) ? { ...cartItem, quantity: cartItem.quantity + 1}
                                      : cartItem
            ));
    } else {
        return [...cartItems, {...item, quantity: 1}]
    }
};

export const decreaseQuantity = (cartItems, item) => {
    const existsCartItem = cartItems.find(
        carItem => carItem.id === item.id)
    if(existsCartItem) {
        if(existsCartItem.quantity !== 1){
            return cartItems.map(cartItem => (cartItem.id === item.id) ? 
                                               {...cartItem, quantity: cartItem.quantity -1}:
                                               cartItem)
        }
        else {
            return cartItems.filter(cartItem => cartItem.id !== item.id)
        }
    }
    else 
        return cartItems;
}