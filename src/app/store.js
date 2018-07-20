import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './reducers';
import middleware from './middlewares';
import { createLogger } from 'redux-logger';

middleware.push(createLogger());
const store = createStore(combineReducers(reducers), applyMiddleware(...middleware));
store.subscribe(() => {
 console.log('Store updated: ', store.getState());
});
export default store;