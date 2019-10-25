import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions"

const initialState = {
    products: []
}

//Reduster do carrinho de compras, recebe uma função com o estado inicial e uma action
export const cart = (state = initialState, action) => {
    switch(action.type) {       
        case ADD_TO_CART:
            //Verifica se já possui o item no carrinho, se possuir retorna o estado
            if (state.products.find(p => p.id === action.product.id)) {
                return state;
            }
            //Se não possuir, retorna as propriedades e adiciona o produto ao estado
            return {
                ...state,
                products: state.products.concat(action.product)
            }

        case REMOVE_FROM_CART: 
            //Verifica se já possui o item no carrinho, se possuir retorna o estado
            if (state.products.find(p => p.id === action.product.id)) {

                return {
                    ...state,
                    //Pega o produto e remove do array/ Funçao filter do javascript/ Pega todos os produtos diferente do ID
                    products: state.products.filter(p => p.id !== action.product.id)
                };
            }

            //Se não possuir, retorna as propriedades e adiciona o produto ao estado
            return state
                              
        //Reduster que se tivar algum erro, retorna o estado
        default:
            return state;

    }
}