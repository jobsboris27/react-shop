import { LOAD_PRODUCTS } from '../constants/ProductsConstants.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ProductData from '../data/ProductData.js';

export default {
    loadProducts() {
        let products = ProductData;
        AppDispatcher.dispatch({
            type: LOAD_PRODUCTS,
            products: products
        });
    }
}

