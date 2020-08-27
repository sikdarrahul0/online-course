import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <a href="/easy">Easy-Learning</a>
                <button className="ml-3 btn btn-success">Log in</button>
                <button className="ml-4 btn btn-dark">Sign up</button>
            </nav>
        </div>
    );
};

export default Header;