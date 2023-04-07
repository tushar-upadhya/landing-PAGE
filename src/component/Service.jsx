import React from "react";
import { useCustomHook } from "../context/context";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";

const Service = () => {
    const { service } = useCustomHook();
    console.log("service:", service);

    return (
        <Wrapper className="section">
            <h2 className="commonHeading">
                <div className="container grid grid-three-column">
                    {service.map((currentElement) => {
                        const { id, body } = currentElement;

                        return (
                            <div key={id} className="card">
                                {/* <figure></figure> */}
                                <div className="cardData">
                                    <h3>{id}</h3>

                                    <p>{body}</p>

                                    <NavLink to="/service">
                                        <Button>Read More</Button>
                                    </NavLink>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </h2>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    @media (max-width: ${({ theme }) => theme.media.tab}) {
        .grid-three-column {
            grid-template-columns: 1fr 1fr;
        }
    }
`;

export default Service;
