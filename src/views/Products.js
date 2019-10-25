import React, { Component } from 'react';
import { Products } from '../api/Products';
import { ProductItem } from '../components/ProductItem';
import './Products.css';


export class ProductsList extends Component {

    //Estado inicial do componente é um array vazio
    state = {
        products: []
    }

    //Usar o ciclo de vida para buscar os produtos ao abrir a aplicação
    async componentWillMount() {
        const { items } = await Products.getProducts()
        this.setState({ products: items });
    }

    //Listar os produtos 
    render()  {
        return (
            <ul className="products-list">
                {this.state.products.map(p => (
                    <ProductItem product={p} />
                ))}
            </ul>
        );
    }
}