import React from 'react';
import { FaMoon } from 'react-icons/fa';

const Navbar = (): JSX.Element => {
    return (
        <div className="p-5 shadow-md bg-white">
            <ul className="flex justify-between items-center">
                <li className="font-bold text-lg">What the world?</li>
                <li className="flex items-center">
                    <span>
                        <FaMoon className="mr-2" />
                    </span>
                    Dark Mode
                </li>
            </ul>
        </div>
    );
};
export default Navbar;
