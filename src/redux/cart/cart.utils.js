
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