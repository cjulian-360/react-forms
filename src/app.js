import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Router, Route} from 'react-router';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './dataStore/reducers/_rootReducer';
import MyComponent from './MyComponent';
import Funds from './funds';
import logger from "redux-logger"
import StatePresenter from './components/connector/StatePresenter';
import '../sass/style.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={MyComponent}/>
            <Route path="funds" component={Funds}/>
            <Route path="state" component={StatePresenter}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);