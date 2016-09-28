import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './dataStore/reducers/_rootReducer';
import MyComponent from './MyComponent';

import '../sass/style.scss';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <MyComponent />
    </Provider>,
    document.getElementById('app')
);