import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import Layout from './containers/Layout';
import store from './store';
const app = document.getElementById('app');

ReactDOM.render(<Provider store={store}>
    <Layout />
</Provider>, app);
