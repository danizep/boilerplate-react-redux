import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router'

import routes from './routes/routes';

import './styles/main.scss';

ReactDOM.render(
    <Router history={hashHistory} routes={routes} />,
    document.getElementById('root')
);
