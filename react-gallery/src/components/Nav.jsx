import React from 'react';

import { useState, useEffect, } from 'react';
import { NavLink } from 'react-router-dom';






const Nav = (props) => {
    let handleClick=(event)=>{
       
       
        let category=event.target.textContent.toLowerCase()
        props.getQuery(category);
        
        }


    return (
    <nav className="main-nav">
            <ul>
                <li><NavLink to='/cats'onClick={handleClick}>Cats</NavLink></li>
                <li><NavLink to='/dogs' onClick={handleClick}>Dogs</NavLink></li>
                <li><NavLink to='/computers'onClick={handleClick}>Computers</NavLink></li>
            </ul>

        </nav>

    );
}
export default Nav;