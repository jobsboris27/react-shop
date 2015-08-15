let router;

export default {
    transitionTo(to, params={}, query={}) {
        router.transitionTo(to, params, query);
    },
    run(render) {
        router.run(render);
    }
}

import routes from './routes.js';
import Router from 'react-router';

router = Router.create({
    routes: routes
});