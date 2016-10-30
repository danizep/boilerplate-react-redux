'use strict';

import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {Root} from '../containers/root/Root';

const routes = (
    <Route name='app' path='/' component={Root}>
    </Route>
);

export default routes;

