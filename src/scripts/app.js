import React from 'react';
import { Router, Route, Link } from 'react-router';
import router from './router/router.js';

router.run(Handler => {
    React.render(<Handler/>, document.getElementById('react-shop'))
});