import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div className="navigation">
            <h1>UNSOLICITED ADVICE</h1>
            <Link to="/advice">
                <p>ADVICE</p>
            </Link>
            <Link to="/">
                <p>HOME</p>
            </Link>
        </div>
    );
};

export default Nav;