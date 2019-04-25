import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class Nav extends React.Component {
    componentDidMount() {
        $(".nav-menu-container ul li a").click(function() {
            $(".nav-menu-container ul li a.nav-clicked").toggleClass("nav-clicked");
            $(this).toggleClass("nav-clicked")
        })
    }
    render() {
        return (
            <div className="nav-container">
                <div className="nav-menu-container">
                    <h1>SalesCard</h1>
                    <ul>
                        <li><Link to="/collection" className="nav-clicked">Collection</Link></li>
                        <li><Link to="/review">Review</Link></li>
                        <li><Link to="/mock">Mock</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;