import React from 'react';

export default class CartItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { product } = this.props;
        console.log(product);

        return (
            <li className="list-group-item products__item">
                <a href={`product/${product.id}`} refs={product.id} className="products__link">{product.name}</a>
                <a href="#" onClick={this.handleAddToCart.bind(this, product.id)} className="btn btn-success products__link_add">Add to cart</a>
            </li>
        );
    }

}