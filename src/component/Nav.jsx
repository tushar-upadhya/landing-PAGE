import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { useState } from "react";

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <NavBar>
            <div className={open ? "menuIcon active" : "menuIcon"}>
                <ul className="navList">
                    <li>
                        <NavLink
                            className="navBarLink"
                            to="/"
                            onClick={() => setOpen(false)}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className="navBarLink"
                            to="/about"
                            onClick={() => setOpen(false)}
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className="navBarLink"
                            to="/service"
                            onClick={() => setOpen(false)}
                        >
                            Service
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            className="navBarLink"
                            to="/contact"
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <div className="mobile_navbar_button">
                    <CgMenu
                        name="menuOutLine"
                        className="menuOutLine mobile_navbar_Icon"
                        onClick={() => setOpen(true)}
                    />

                    <CgCloseR
                        name="closeOutLine"
                        className="closeOutLine  mobile_navbar_Icon"
                        onClick={() => setOpen(false)}
                    />
                </div>
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

    .mobile_navbar_button {
        display: none;

        .closeOutLine {
            display: none;
        }
    }

    .mobile_navbar_button[name="closeOutLine"] {
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .mobile_navbar_button {
            display: inline-block;
            z-index: 999;
            border: ${({ theme }) => theme.colors.black};

            .mobile_navbar_Icon {
                font-size: 4.2rem;
                color: ${({ theme }) => theme.colors.black};
            }
        }

        .navList {
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;

            transform: translateX(100%);
            visibility: hidden;
            opacity: 0;

            li {
                .navBarLink {
                    &:link,
                    &:visited {
                        font-size: 4.8rem;
                    }
                    &:hover,
                    &:active {
                        color: ${({ theme }) => theme.colors.helper};
                    }
                }
            }
        }

        .active .mobile_navbar_Icon {
            display: none;
            font-size: 4.2rem;
            position: absolute;
            top: 3%;
            right: 10%;
            color: ${({ theme }) => theme.colors.black};
            z-index: 999;
        }

        .active .closeOutLine {
            display: inline-block;
        }

        .active .navList {
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
            z-index: 999;
        }
    }
`;

export default Nav;
