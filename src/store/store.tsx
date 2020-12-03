import { createStore, applyMiddleware } from 'redux';
// Redux saga
import createSagaMiddleware from 'redux-saga';
import combineReducer from '../reducers/RootReducers';
import rootSaga from '../sagas/RootSagas';
const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;