import React from 'react';

export default class CartCounter extends React.Component {
    constructor() {
        super();
    }

    render() {
        let { cartCounter } = this.props;
        console.log(cartCounter);
        let cartLenght = cartCounter ? cartCounter.length : 'Пустая корзина';
        return (
            <a href="#cart" className="btn btn-primary">
                <i className="glyphicon glyphicon-shopping-cart"></i>
                <span className="badge">{cartLenght}</span>
            </a>
        );
    }

}