import React from 'react';
import { useHistory } from 'react-router-dom';

//components
import Navbar from 'src/components/Navbar';
import Filters from 'src/components/Filters';
import Card from 'src/components/Card';

const App = (): JSX.Element => {
    const history = useHistory();
    return (
        <div className="h-screen bg-lightGray-100">
            <Navbar />
            <Filters />
            <div className="x-content-padding p-8 grid grid-cols-4 gap-10">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};
export default App;
