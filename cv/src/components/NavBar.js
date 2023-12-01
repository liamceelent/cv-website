import React from "react";
import "./comp.css"
import { NavLink as Link, NavLink } from "react-router-dom";

const NavBar = () => {

    
    return (
        <>
            <nav>
                <div>
                    <NavLink to="/home">
                        Home
                    </NavLink>
                    <NavLink to="/aboutme">
                        About me
                    </NavLink>
                    <NavLink to="/PreviousProjects" activeStyle>
                        Previous Projects
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </div>
            </nav>
        </>
    );
};
 
export default NavBar;