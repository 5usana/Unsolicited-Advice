import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

const Nav = () => {
    return (
        <div>
            <h1>UNSOLICITED ADVICE</h1>
            <Link to="/">
                <Home />
            </Link>
            <Link to="/advice">
                <p>ADVICE</p>
            </Link>
        </div>
    );
};

export default Nav;