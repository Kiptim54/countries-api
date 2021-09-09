import React from 'react';
import { useHistory } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';

import store from 'src/redux/store';
//components
import Navbar from 'src/components/Navbar';
import Filters from 'src/components/Filters';
import Card from 'src/components/Card';

import Home from 'src/modules/main/Home';

const App = (): JSX.Element => {
    const history = useHistory();

    return (
        <Provider store={store}>
            <div className="h-screen bg-lightGray-100">
                <Navbar />
                <Filters />
                <div className="x-content-padding p-8 grid grid-cols-4 gap-10">
                    <Home />
                </div>
            </div>
        </Provider>
    );
};
export default App;
