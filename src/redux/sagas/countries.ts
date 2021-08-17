import { AxiosError } from 'axios';
import { call, put } from 'redux-saga/effects';

import { fetchCountries } from 'src/api';
import { fetch_countries_success, fetch_countries_error } from 'src/redux/actions';
import { ICountries, IError, IStoreState } from '../types';

export function* fetchAllCountries(): Generator {
    console.log('in tru function');
    // const payload = yield call(fetchCountries);

    try {
        const payload = (yield call(fetchCountries)) as ICountries[];
        console.log('in tru function');
        yield put(fetch_countries_success(payload));
    } catch (err) {
        console.log('in error function');

        const error: IError = {
            code: err?.response?.code,
            description: err?.response?.error,
        };
        yield put(fetch_countries_error(error));
    }
}
