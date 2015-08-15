import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { LOAD_PRODUCTS } from '../constants/ProductsConstants.js';

const CHANGE_EVENT = 'CHANGE_EVENT';
let _products = null;

function loadProductsAsync(products) {
    return _products = products;
}
class ProductsStore extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    getPoducts() {
        return _products;
    }
}

let store = new ProductsStore();

AppDispatcher.register(payload => {

    switch (payload.type) {

        case LOAD_PRODUCTS:
            loadProductsAsync(payload.products);
            store.emitChange();
            break;

    }

});

export default store;