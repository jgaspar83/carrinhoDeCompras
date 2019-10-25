import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions';


//Listar os produtos armazenados na store
class CartComponent extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.products.map(product => (
                    <li>
                        <img width="100" src={require(`../assets/images/${product.image}`)} alt=""/>
                        <h4>{product.name}</h4>
                        <span>{product.price}</span>
                        <button onClick={() => this.props.removeFromCart(product)}>Remove from cart</button>
                    </li>
                    ))}
                </ul>
                <b>Amount:</b> {this.props.products.reduce((acc, current) => acc + current.price, 0).toFixed(2)}
            </div>
        )
    }
}

//Metodo que Retorna quais as propriedades que serão exibidos do componente
const mapStateToProps = ({ cart }) => ({
    products: cart.products
})

//Exporta quais as actions utilizadas e suas propriedades
export const Cart = connect(
    mapStateToProps,
    { removeFromCart }
)(CartComponent)