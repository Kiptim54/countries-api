import { countries } from 'src/redux/reducers';
import { createStore } from 'redux';
import { IStoreState } from './types';
import configureStore from './configureStore';

const initialState: IStoreState = {
    countries: countries.defaultState,
};

const store = configureStore(initialState);

export default store;
