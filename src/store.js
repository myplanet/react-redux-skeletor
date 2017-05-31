import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers/index';

const defaultStore = {};

const store = createStore(
  rootReducer,
  defaultStore,
  (window.devToolsExtension ?
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension()
    )
  :
    compose(
      applyMiddleware(thunk)
    )
  )
);

export default store;
