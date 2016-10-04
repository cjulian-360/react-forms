import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './dataStore/reducers/_rootReducer';
import MyComponent from './MyComponent';
import StatePresenter from './components/connector/StatePresenter';
import '../sass/style.scss';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <div>
            <MyComponent />
            <StatePresenter/>
        </div>
    </Provider>,
    document.getElementById('app')
);