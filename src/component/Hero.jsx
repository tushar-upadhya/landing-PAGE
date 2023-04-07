import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { useCustomHook } from "../context/context";

const Hero = () => {
    const { name, image } = useCustomHook();

    return (
        <Wrapper>
            <div className="container grid grid-two-column">
                <div className="section-hero-data">
                    <p className="heroTop">THIS IS ME</p>

                    <h1 className="heroHeading">{name}</h1>

                    <p className="heroPara">
                        {name} Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Dolores magnam laudantium nisi,
                        veritatis natus eaque dolorum illum, suscipit at ipsum
                        necessitatibus, quo veniam culpa commodi neque assumenda
                        ullam delectus quam provident quibusdam ex. Consectetur
                        dignissimos consequuntur nihil unde cumque iure cum
                        fugiat, repellendus ipsam quaerat, animi facere
                        cupiditate doloribus exercitationem.
                    </p>

                    <Button className="btn hireMe">
                        <NavLink to="/contact">Hire Me</NavLink>
                    </Button>
                </div>

                <div className="section-hero-image">
                    <picture>
                        <img src={image} alt="heroImage" className="heroImg" />
                    </picture>
                </div>
            </div>
        </Wrapper>
    );
};

//? style component

const Wrapper = styled.section`
    padding: 9rem 0;

    .section-hero-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .btn {
        max-width: 16rem;
    }

    .hero-top-data {
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.helper};
    }

    .heroHeading {
        text-transform: uppercase;
        font-size: 6.4rem;
    }

    .heroPara {
        margin-top: 1.5rem;
        margin-bottom: 3.4rem;
        max-width: 60rem;
    }

    .section-hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    picture {
        text-align: center;
    }

    .heroImg {
        max-width: 80%;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .grid {
            gap: 7.2rem;
        }
    } ;
`;

export default Hero;
