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
                <div className='logo'>liam</div>
                <div className='menu-toggle' onClick={()=> setNavOpen(!navOpen)}>
                    <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
                        <span className={navOpen? "lineTop spin" : "lineTop"}></span>
                        <span className={navOpen? "lineBottom spin" : "lineBottom"}></span>
                    </div>
                </div>
            </div>
            <div className='nav-overlay' style={{top: navOpen ? "0" : "-100%", transitionDelay: navOpen ? "0s" : "0s"}}></div>
        </div>
    </div>
    )
};

export default Nav;