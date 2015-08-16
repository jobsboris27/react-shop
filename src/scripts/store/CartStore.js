import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { ADD_PRODUCT_BY_ID, DELETE_PRODUCT_BY_ID  } from '../constants/CartConstants.js';

const CHANGE_EVENT = 'CHANGE_EVENT';
let _cartProducts = [];

function addToCartProductByIdAsync(cartProducts) {

    return _cartProducts.push(cartProducts);
}

class CartStore extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getCartPoducts() {
        return _cartProducts;
    }
}

let store = new CartStore();

AppDispatcher.register(payload => {

    switch (payload.type) {

        case ADD_PRODUCT_BY_ID:
            addToCartProductByIdAsync(payload.productCart);
            store.emitChange();
            break;

        case DELETE_PRODUCT_BY_ID:
            loadProductsAsync(payload.products);
            store.emitChange();
            break;

    }

});

export default store;