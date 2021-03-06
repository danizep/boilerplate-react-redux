import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '../../store/configureStore';
import App from '../App';

import DevTools from '../DevTools/DevTools';

const store = configureStore();

module.exports = class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
                {/*<DevTools />*/}
            </Provider>
        );
    }
};