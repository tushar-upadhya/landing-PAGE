import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.jpg";
import Nav from "./Nav";
import styled from "styled-components";

const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src={logo} alt="logo" className="logo" />
            </NavLink>
            <Nav />
        </MainHeader>
    );
};

//? style component

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        height: 70px;
        width: 70px;
    }
`;

export default Header;
