import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from 'src/redux/reducers';
import { IStoreState } from './types';
import { mySagas } from 'src/redux/sagas/index';

const sagaMiddleWare = createSagaMiddleWare();

const configureStore = (defaultState: IStoreState): Store => {
    const store = createStore(rootReducer, defaultState, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
    sagaMiddleWare.run(mySagas);
    return store;
};

export default configureStore;
