import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './Home';

ReactDOM.render(
    <Provider store={store}>
        <Home></Home>
    </Provider>,
    document.getElementById('root')
);

