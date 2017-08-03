import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { reduce } from './reduce';

console.log(reduce);

const store = createStore(
	reduce ,
	applyMiddleware(thunk ,promiseMiddleware)
)

export default store;