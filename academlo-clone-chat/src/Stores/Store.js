import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../Reducers'

const Store = createStore(
	rootReducer,
	composeWithDevTools( applyMiddleware( thunk ) )
);

export default Store;