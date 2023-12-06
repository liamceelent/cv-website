import React from "react";
import "./navbar.css"
import { NavLink as Link, NavLink } from "react-router-dom";

const NavBar = () => {

    
    return (
        <>
            <nav className="navbar">
                <div>
                    <NavLink to="/home" className={'navitem'}>
                        Home
                    </NavLink>
                    <NavLink to="/aboutme" className={'navitem'}>
                        About me
                    </NavLink>
                    <NavLink to="/PreviousProjects" className={'navitem'}>
                        Previous Projects
                    </NavLink>
                </div>
            </nav>
        </>
    );
};
 
export default NavBar;