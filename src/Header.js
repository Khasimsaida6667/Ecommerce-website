import React from 'react';
import { FaSearch,FaHeart, FaShoppingBag, FaUser } from 'react-icons/fa';
import "./Header.css";

const Header = () => {
    return (
        <header className="header">

            <div className="header-content">
                <h1>LOGO</h1>
                <nav className="navbar">
                    <ul>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Stories</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header-icons">
                <div className="search-icon">
                    <FaSearch />
                </div>
                <div className="heart-icon">
                    <FaHeart />
                </div>
                <div className="shop-icon">
                    <FaShoppingBag />
                </div>
                <div className="user-icon">
                    <FaUser />
                </div>

                <div className="language-dropdown">
                    <select>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="es">Español</option>
                    </select>
                </div>
            </div>

        </header>
    );
};

export default Header;