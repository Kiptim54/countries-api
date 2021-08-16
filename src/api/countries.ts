import callApi from './callApi';
import { AxiosResponse } from 'axios';
import { ICountries } from 'src/redux/types';

const fetchCountries = async (): Promise<ICountries[]> => {
    const { data } = (await callApi.get('all')) as AxiosResponse<ICountries[]>;
    console.log('data has been called', data);
    return data;
};

export { fetchCountries };
