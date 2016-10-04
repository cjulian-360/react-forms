import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Router, Route } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './dataStore/reducers/_rootReducer';
import MyComponent from './MyComponent';
import Funds from './funds';
import logger from "redux-logger"
import fundsReducer from './dataStore/reducers/funds'; //for testing. if passing only this to store - it works good.

import StatePresenter from './components/connector/StatePresenter';
import '../sass/style.scss';

const middleware = applyMiddleware(logger());
const store = createStore(rootReducer, middleware);
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={MyComponent} />
        <Route path="funds" component={Funds} />
      </Router>
        <div>
            <MyComponent />
            <StatePresenter/>
        </div>
    </Provider>,
    document.getElementById('app')
);