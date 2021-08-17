import { takeLatest, takeEvery } from 'redux-saga/effects';

import { FETCHCOUNTRIES, fetch_countries } from 'src/redux/actions/index';
import { fetchAllCountries } from './countries';

export function* mySagas(): Generator {
    console.log('general saga runnig');
    yield takeLatest(FETCHCOUNTRIES, fetchAllCountries);
}
