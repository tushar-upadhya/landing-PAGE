import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const ScrollBtn = () => {
    const [topBtn, setTopBtn] = useState(false);

    const topButton = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const scroll = () => {
        let buttonHidden = 250;
        const windowScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (windowScroll > buttonHidden) {
            setTopBtn(true);
        } else {
            setTopBtn(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scroll);
        return () => window.removeEventListener("scroll", scroll);
    }, []);

    return (
        <Wrapper>
            {topBtn && (
                <div className="top-btn" onClick={topButton}>
                    <FaArrowUp className="top-btn--icon" />
                </div>
            )}
        </Wrapper>
    );
};
const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .top-btn {
        font-size: 2.4rem;
        width: 4rem;
        height: 4rem;
        color: #fff;
        background-color: ${({ theme }) => theme.colors.btn};
        box-shadow: ${({ theme }) => theme.colors.shadow};
        border-radius: 50%;
        position: fixed;
        bottom: 5rem;
        right: 5rem;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &--icon {
            animation: top 1.2s linear infinite alternate-reverse;
        }

        @keyframes top {
            100% {
                transform: translateY(0.5rem);
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .top-btn {
            right: 0;
            left: 40%;
        }
    }
`;

export default ScrollBtn;
