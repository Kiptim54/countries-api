import React from 'react-icons';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_countries } from 'src/redux/actions';

import { Card } from 'src/components';
import { ICountries, IStoreState } from 'src/redux/types';
import { useEffect } from 'react';

const Home = (): JSX.Element => {
    const dispatch = useDispatch();
    dispatch(fetch_countries());

    const countries: ICountries[] = useSelector((store: IStoreState) => {
        return store.countries.countries;
    });

    useEffect(() => {
        console.log('ipdating countries', countries);
    }, [countries]);
    return (
        <div>
            {countries.map((country: ICountries) => {
                return <Card key={country.capital} />;
            })}
        </div>
    );
};
export default Home;
