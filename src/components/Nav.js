import React from "react";
import { Link, withRouter } from "react-router-dom";
import $ from "jquery";

class Nav extends React.Component {
    componentDidMount() {
        $(".nav-menu-container ul li a").click(function() {
            $(".nav-menu-container ul li a.nav-clicked").toggleClass("nav-clicked");
            $(this).toggleClass("nav-clicked")
        })
    }
    
    render() {
        const cur = this.props.location.pathname.split("/")[1];
        return (
            <div className="nav-container">
                <div className="nav-menu-container">
                    <h1><Link to="/collection" style={{color:"white"}}>SalesCard</Link></h1>
                    <ul>
                        <li><Link to="/collection" className={cur === "collection" ? "nav-clicked" : ""}>Collection</Link></li>
                        <li><Link to="/review" className={cur === "review" ? "nav-clicked" : ""}>Review</Link></li>
                        <li><Link to="/mock" className={cur === "mock" ? "nav-clicked" : ""}>Mock</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(Nav);