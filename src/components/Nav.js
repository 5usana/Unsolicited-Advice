import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <h1>Unsolicited Advice</h1>
            <Link to="/">
                <p>Home</p>
            </Link>
        </div>
    );
};

export default Nav;