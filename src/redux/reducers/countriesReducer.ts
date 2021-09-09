import { AnyAction } from 'redux';
import { ICountries, IError, ICountriesReducer } from 'src/redux/types';
import { FETCHCOUNTRIES_SUCCESS, FETCHCOUNTRIES, FETCHCOUNTRIES_ERROR } from 'src/redux/actions';

const defaultState: ICountriesReducer = {
    countries: [],
    isFetching: false,
    error: undefined,
};

const countriesReducer = (state: ICountriesReducer = defaultState, action: AnyAction): ICountriesReducer => {
    switch (action.type) {
        case FETCHCOUNTRIES:
            console.log('fetching countries');
            return {
                ...state,
                isFetching: true,
                error: undefined,
            };

        case FETCHCOUNTRIES_SUCCESS:
            console.log('success called');
            return {
                ...state,
                isFetching: false,
                error: undefined,
                countries: action.payload as ICountries[],
            };

        case FETCHCOUNTRIES_ERROR:
            console.log('return error');
            return {
                ...state,
                isFetching: false,
                error: action.payload as IError,
            };

        default:
            return state;
    }
};

export { defaultState, countriesReducer };
