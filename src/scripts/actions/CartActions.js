import { ADD_PRODUCT_BY_ID, DELETE_PRODUCT_BY_ID  } from '../constants/CartConstants.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import ProductData from '../data/ProductData.js';

export default {
    addProductToCartById(id) {
        let productCart = ProductData;
        let poductId = id;

        let cartProduct = productCart[poductId-1];
        console.log(cartProduct);
        if (cartProduct) {
            AppDispatcher.dispatch({
                type: ADD_PRODUCT_BY_ID,
                productCart: cartProduct
            });
        }

    },
    deleteProductToCartById(id) {
        let productCart = ProductData;
        AppDispatcher.dispatch({
            type: DELETE_PRODUCT_BY_ID,
            productCart: cartProduct
        });
    }
}

