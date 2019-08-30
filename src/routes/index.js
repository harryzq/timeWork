import React from 'react';
import {NavLink} from 'react-router-dom';
//nav.js
const NavBar = () =>(
    <div>
        <div>
            <NavLink to='/timeLine'>timeLine</NavLink> |&nbsp;
            <NavLink to='/newEmployee'>newEmployee</NavLink>
        </div>
    </div>
    )
export default NavBar;