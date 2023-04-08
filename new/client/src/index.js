import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import LoginPage from './components/login/LoginPage';
import { reducers } from './reducers';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(reducers, compose(applyMiddleware(thunk)))
// console.log(store.getState);
root.render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root'));