import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import ReactDom from 'react-dom';
import {Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from './component/app/app';
import sectionsReducer from './reducer/section';
import './styles/main.scss';

//  ---------------------
// Setting up the store
// -----------------------
const middleware = {};
const store = createStore(sectionsReducer, composeWithDevTools(applyMiddleware(...middleware)));
// specifying reducer with sectionsReducer, take sectionsReducer and update this store with sectionsReducer

// ---------------
// rendering
// --------------
const container = document.createElement('div');
document.body.appendChild(container);
ReactDom.render(<Provider store={store}><App/></Provider>); // this keeps reference to the store, it holds the store so we need to link it