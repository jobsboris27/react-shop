import React from 'react';
import CartStore from '../../../store/CartStore.js';
import CartActions from '../../../actions/CartActions.js';

export default class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            addCart: false
        };
    }

    handleAddToCart = (productId, e) => {
        e.preventDefault();

        this.setState({
            addCart: true
        });

        CartActions.addProductToCartById(productId);
    };

    render() {
        let { product } = this.props;
        let addCartState = this.state.addCart;
        let productTemplate = undefined;

        if (!addCartState) {
            productTemplate =
                <li className='list-group-item products__item'>
                    <a href={`#product/${product.id}`} refs={product.id} className="products__link">{product.name}</a>
                    <a href="#" onClick={this.handleAddToCart.bind(this, product.id)} className="btn btn-success products__link_add">Addto cart</a>
                </li>;
        } else {
            productTemplate = undefined;
        }

        return (
            <div>
                {productTemplate}
            </div>

        );
    }

}