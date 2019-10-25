import React, { Component } from 'react';
import { Products } from '../api/Products';
import { connect } from 'react-redux';
import { addToCart } from "../actions";
import {Link } from 'react-router-dom';


class ProductComponent extends Component {

    //Estado inicial
    state = {
        product: {}
    }

    //Utilizar o ciclo de vida inicial do React para pegar o ID e buscar o produto
    async componentWillMount() {

        //Usando o metodo de buscar por ID
        const product = await Products.getProductById(this.props.match.params.id);
        
        //SetState no produto que recebemos pelo Metodo
        this.setState({ product })
    }

    //Renderizar uma pagina com os detalhes dos produtos
    render() {
        return (
            <div className="product-page">
                {this.state.product.image &&
                <img width="500" src={require(`../assets/images/${this.state.product.image}`)} alt="" />}
                <h3>{this.state.product.name}</h3>
                <span className="product-price">
                    <b>Price:</b>
                    R${this.state.product.price}
                </span>
                <p>{this.state.product.description}</p>                
                <button onClick={() => this.props.addToCart(this.state.product)} >Add to Cart</button>
                <p><Link to="/cart">View cart</Link></p>
            </div>
        );
    }
}

//Adicionar o produto à store
export const Product = connect(
    //primeiro argumento
    undefined, 
    //passar as funções utilizadas no componente
    { addToCart }
)(ProductComponent)