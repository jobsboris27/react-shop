import React from 'react';
import Layout from './page-components/Layout/Layout.js';
import ProductsStore from '../store/ProductsStore.js';
import CartStore from '../store/CartStore.js';
import ProductsActions from '../actions/ProductsActions.js';
import Product from './page-components/Product/Product.js';
import CartCounter from './page-components/CartItem/CartCounter.js';

export default class ProductsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            cart: undefined
        };

        this._onEventListChangeListener = this._onProductsLoaded.bind(this);
        this._onEventListChangeListenerCart = this._onCartProductsLoaded.bind(this);
    }

    componentWillMount() {
        ProductsStore.addChangeListener(
            this._onEventListChangeListener
        );
        CartStore.addChangeListener(
            this._onEventListChangeListenerCart
        );
        ProductsActions.loadProducts();
    }

    componentWillUnmount() {
        ProductsStore.removeChangeListener(
            this._onEventListChangeListener
        );
        CartStore.removeChangeListener(
            this._onEventListChangeListenerCart
        );
    }

    render() {
        let products = this.state.products;

        let productTemplate = products.map(product => {
            return <Product product={product} />
        });

        return (
            <Layout>
                <div className="col-md-6 products">
                    <ul className="list-group">
                        {productTemplate}
                    </ul>
                </div>
                <div className="col-md-6 cartCounter">
                    <CartCounter cartCounter={this.state.cart } />
                </div>
            </Layout>
        );
    }
    _onProductsLoaded() {
        this.setState({
            products: ProductsStore.getPoducts()
        });
    }

    _onCartProductsLoaded() {
        this.setState({
            cart: CartStore.getCartPoducts()
        });
    }
}