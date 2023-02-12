import React, { Component } from 'react';

const NavBar = ({totalCounters}) => {
    return ( 
            <nav className='navbar nabbar-light bg-light'>
            <a className ="navbar-brand" href="#">NavBar
             <span className='btn btn-danger m-2'>
                {totalCounters }
            </span>
            </a>
            </nav>
     );
}
 
 
export default NavBar;