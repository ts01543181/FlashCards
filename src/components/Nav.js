import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-menu-container">
                <h1>SalesCard</h1>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/cards">Cards</Link></li>
                    <li><Link to="/favorite">Favorite</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Nav;