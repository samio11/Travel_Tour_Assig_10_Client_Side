import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const MainRoot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoot;