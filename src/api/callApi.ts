import axios from 'axios';

const callApi = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2/',
});

export default callApi;
