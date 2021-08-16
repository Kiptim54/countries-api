import { takeLatest } from 'redux-saga/effects';

import { FETCHCOUNTRIES } from 'src/redux/actions/index';
import { fetchCountries } from 'src/api';

export function* mySagas(): Generator {
    takeLatest(FETCHCOUNTRIES, fetchCountries);
}
