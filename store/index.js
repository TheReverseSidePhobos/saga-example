import { combineReducers } from 'redux';
import { reducer } from './reducer';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(middleware));
  }
  return composeWithDevTools(applyMiddleware(middleware));
};

export const rootReducer = combineReducers({
  app: reducer
});

const store = createStore(
  rootReducer,
  bindMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
