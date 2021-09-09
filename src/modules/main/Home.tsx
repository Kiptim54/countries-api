import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetch_countries } from 'src/redux/actions';

import { Card } from 'src/components';
import { ICountries, IStoreState } from 'src/redux/types';
import { useEffect } from 'react';

const Home = (): JSX.Element => {
    // const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useDispatch();

    const countries: ICountries[] = useSelector((store: IStoreState) => {
        return store.countries.countries;
    });
    const isLoading: boolean = useSelector((store: IStoreState) => {
        return store.countries.isFetching;
    });

    useEffect(() => {
        dispatch(fetch_countries());

        console.log('ipdating countries', countries);
    }, []);
    return (
        <>
            {isLoading
                ? 'isLoading'
                : countries.map((country: ICountries, index) => {
                      return <Card key={index} country={country} />;
                  })}
        </>
    );
};
export default Home;
