import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app.js';
import { Router, Route, hashHistory } from 'react-router';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} />
    </Router>,
    document.getElementById('app')
);