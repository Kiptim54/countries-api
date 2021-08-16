interface ICountries {
    name: string;
    capital: string;
    region: string;
    subregion: string;
    population: number;
    topLevelDomain: Array<string>;
    borders: Array<string>;
    currencies: Array<ICurrencies>;
    languages: Array<ITranslations>;
}

interface ICurrencies {
    code: string;
    name: string;
    symbol: string;
}

interface ITranslations {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

interface IError {
    description: string | { [key: string]: string };
    code: string;
}

interface IStoreState {
    countries: ICountriesReducer;
}

interface ICountriesReducer {
    countries: ICountries[];

    isFetching: boolean;
    error: undefined | IError;
}

export {
    FETCHCOUNTRIES,
    FETCHCOUNTRIES_SUCCESS,
    FETCHCOUNTRIES_ERROR,
    ITranslations,
    ICurrencies,
    ICountries,
    IError,
    IStoreState,
    ICountriesReducer,
};
