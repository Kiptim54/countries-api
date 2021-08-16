import { combineReducers } from 'redux';

import * as countries from './countriesReducer';

const rootReducer = combineReducers({
    countries: countries.countriesReducer,
});

export { rootReducer, countries };
