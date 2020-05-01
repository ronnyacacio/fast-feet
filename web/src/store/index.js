// import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

// import persistReducers from './modules/persistReducers';
import createStore from './createStore';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);
// const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
