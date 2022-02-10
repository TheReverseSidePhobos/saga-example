import {combineReducers} from 'redux';
import {reducer} from './reducer';
import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {saga} from './sagas';
const sagaMiddleware = createSagaMiddleware();


export const rootReducer = combineReducers({
    app: reducer
});


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);

export default store;