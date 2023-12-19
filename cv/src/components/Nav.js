import React from 'react'
import "./nav.css"
import { useState } from 'react';
import {NavLink } from "react-router-dom";

const Nav = () => {

    const [navOpen, setNavOpen] = useState(false);

    return (
    <div className='nav'> 
        <div className='nav-container'>
            <div className='navbar'>
                <div className='menu-toggle' onClick={()=> setNavOpen(!navOpen)}>
                    <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                        <span className={navOpen? "lineTop spin" : "lineTop"}></span>
                        <span className={navOpen? "lineBottom spin" : "lineBottom"}></span>
                    </div>
                </div>
            </div>
            <div className='nav-overlay' style={{top: navOpen ? "0" : "-100%", transitionDelay: navOpen ? "0s" : "0s"}}>
                <div className='link-container'>
                    <NavLink to="/home" className='navitem'>
                        Home
                    </NavLink>
                    <NavLink to="/aboutme" className='navitem'>
                        About me
                    </NavLink>
                    <NavLink to="/projects" className='navitem'>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className='navitem'>
                        contact
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Nav;