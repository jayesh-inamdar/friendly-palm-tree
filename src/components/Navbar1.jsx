import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
           <div className="navbar-container">
                <div className="brand">
                    <Link to="/" className="logo">Personal Bookshelf</Link>
                </div>
                <div className="nav-links">
                    <Link to="/" className="nav-link">
                        <span>Search</span>
                    </Link>
                    <Link to="/bookshelf" className="nav-link">
                        <span>Bookshelf</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
