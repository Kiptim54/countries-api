import { AnyAction } from 'redux';
import { ICountries, IError } from 'src/redux/types/countries';

export const FETCHCOUNTRIES = 'FETCH_COUNTRIES';
export const FETCHCOUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCHCOUNTRIES_ERROR = 'FETCH_COUNTRIES_ERROR';

export const fetch_countries = (): AnyAction => {
    return {
        type: FETCHCOUNTRIES,
    };
};

export const fetch_countries_error = (error: IError): AnyAction => {
    return {
        type: FETCHCOUNTRIES_ERROR,
        payload: error,
    };
};

export const fetch_countries_success = (countries: ICountries[]): AnyAction => {
    return {
        type: FETCHCOUNTRIES_SUCCESS,
        payload: countries,
    };
};
