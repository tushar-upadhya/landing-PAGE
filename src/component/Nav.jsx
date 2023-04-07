import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
    return (
        <NavBar>
            <div className="menuIcon">
                <ul className="navList">
                    <li>
                        <NavLink className="navBarLink" to="/">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="navBarLink" to="/about">
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="navBarLink" to="/service">
                            Service
                        </NavLink>
                    </li>

                    <li>
                        <NavLink className="navBarLink" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </NavBar>
    );
};

//? style component

const NavBar = styled.nav`
    .navList {
        display: flex;
        gap: 4rem;

        li {
            list-style: none;

            .navBarLink {
                &:link,
                &:visited {
                    display: inline-block;
                    text-decoration: none;
                    font-size: 1.8rem;
                    text-transform: uppercase;
                    color: ${({ theme }) => theme.colors.black};
                    transition: color 0.3s linear;
                }
                &:hover,
                &:active {
                    color: ${({ theme }) => theme.colors.helper};
                }
            }
        }
    }
`;

export default Nav;
