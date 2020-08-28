import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <a href="/easy">Online-Learning</a>
                <button className="ml-3 btn btn-dark">Log in</button>
                <button className="ml-4 btn btn-outline-warning">Sign up</button>
            </nav>
        </div>
    );
};

export default Header;