import React from "react";
import { Nav, NavLink, NavMenu } from "./NavBarElements";
 
const NavBar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/aboutme" activeStyle>
                        About me
                    </NavLink>
                    <NavLink to="/PreviousProjects" activeStyle>
                        Previous Projects
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default NavBar;