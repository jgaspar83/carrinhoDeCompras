export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

//Action creator para adicionar os produtos ao carrinho de compras
export const addToCart = product => ({
    type: ADD_TO_CART,
    product, 
});

//Action para remover o produto do carrinho de compras
export const removeFromCart = product => ({
    //Tipo da ação e o peloude
    type: REMOVE_FROM_CART,
    product
})