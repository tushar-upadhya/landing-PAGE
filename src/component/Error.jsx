import React from "react";
import styled from "styled-components";
import error from "../images/error.svg";
import { Button } from "./Button";
import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <Wrapper>
            <img src={error} alt="error" />

            <NavLink to="/">
                <Button className="btn">Back</Button>
            </NavLink>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    padding: 9rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .btn {
        margin-top: 3rem;
        font-size: 1.8rem;
    }
`;

export default Error;
