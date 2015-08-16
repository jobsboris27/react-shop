import React from 'react';
import { Router, Route, Link } from 'react-router';
import ProductsPage from '../page/ProductsPage.js';
import ProductPage from '../page/ProductPage.js';
import App from '../components/App.js';

let routes = (
    <Route handler={App}>
        <Route path="/" handler={ProductsPage}/>
        <Route path="/product:id" handler={ProductPage}/>
    </Route>
);

export default routes;