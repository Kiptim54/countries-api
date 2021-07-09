import React from 'react';
import { MdSearch } from 'react-icons/md';

const Filters = (): JSX.Element => {
    return (
        <div className="x-content-padding py-6">
            <form className="grid  grid-cols-1 md:grid-cols-3 gap-4 ">
                <div className="relative ">
                    <span className="absolute inset-y-0 left-0 mx-2  flex items-center">
                        <MdSearch />
                    </span>
                    <input className="input-form " placeholder={` Search for a country`} type="text" />
                </div>
                <select className="select-input md:col-start-3" placeholder="Filter Country">
                    <option value="">Select Country</option>
                    <option value="kenya">Kenya</option>
                    <option value="tanzania">Tanzania</option>
                </select>
            </form>
        </div>
    );
};

export default Filters;
