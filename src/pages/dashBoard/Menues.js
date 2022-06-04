import React from 'react';
import { NavLink } from "react-router-dom";

const Menues = () => {
    return (
        <>
            <li><NavLink to="/dashboard">Generate Lab Recipe</NavLink></li>
        </>
    );
};

export default Menues;