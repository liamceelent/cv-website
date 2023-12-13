import React from "react";
import "./navbar.css"
import {NavLink } from "react-router-dom";

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
                    <NavLink to="/Projects" className={'navitem'}>
                        Projects
                    </NavLink>
                </div>
            </nav>
        </>
    );
};

export default NavBar;