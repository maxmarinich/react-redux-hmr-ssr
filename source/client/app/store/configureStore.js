import thunk from 'redux-thunk';
import reducers from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && process.env.NODE_ENV === 'development' ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export default  function (initialState = {}) {
  const store =  createStore(reducers, initialState, composeEnhancers(applyMiddleware(thunk)));

  if (module.hot && process.env.NODE_ENV === 'development') {
    module.hot.accept();
  }

  return store;
}
