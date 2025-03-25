import React from 'react';

import { useState, useEffect, } from 'react';
import { NavLink } from 'react-router-dom';





import fetchData from  '../App'


const Nav = () => {
    return (
            
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/cats'>Cats</NavLink></li>
                <li><NavLink to='/dogs'>Dogs</NavLink></li>
                <li><NavLink to='/computers'>Computers</NavLink></li>
            </ul>
        </nav>

    );
}
export default Nav;