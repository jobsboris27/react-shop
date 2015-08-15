import React from 'react';
import Layout from './page-components/Layout/Layout.js';
import ProductsStore from '../store/ProductsStore.js';
import ProductsActions from '../actions/ProductsActions.js';
import Product from './page-components/Product/Product.js';

export default class ProductsPage extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        };

        this._onEventListChangeListener = this._onNewsLoaded.bind(this);
    }

    componentWillMount() {
        ProductsStore.addChangeListener(
            this._onEventListChangeListener
        );
        ProductsActions.loadProducts();
    }

    componentWillUnmount() {
        ProductsStore.removeChangeListener(
            this._onEventListChangeListener
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
            </Layout>
        );
    }
    _onNewsLoaded() {
        this.setState({
            products: ProductsStore.getPoducts()
        });

    }
}