import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <ul>
                <li><NavLink to="/">Login</NavLink></li>
                <li><NavLink to="/buy_Cake">Buy Cake</NavLink></li>
                <li><NavLink to="/buy_Cake_shared_state">shared state Buy Cake</NavLink></li>
                <li><NavLink to="/get_User">Get User</NavLink></li>
                <li><NavLink to="/get_User_shared_state">Shared State Get User</NavLink></li>
                <li><NavLink to="/post_data">Post Data</NavLink></li>
            </ul>
        </div>
    );
}

export default Nav;
