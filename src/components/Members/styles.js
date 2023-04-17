import styled from "styled-components";

export const View = styled.div`
    background-color: var(--black);
    height: 700px;

    img{
        width: 32%;
        height: 40%;

        margin: 1.5rem 0;
    }
`

export const H2 = styled.h2`
    margin-top: 2.4rem;

    font-size: 3.8rem;
    font-style: italic;

    text-transform: uppercase;
    text-align: left;

    max-width: 1000px;
    color: var(--white);

    span{
        color: var(--orange1);
    }
`

export const Button = styled.button`
    background-color: var(--orange1);
    color: var(--black);

    width: 140px;
    height: 48px;
    
    position: relative;
    top: -60px;

    border: none;
    border-radius: 4px;

    padding: 14px 24px;
    margin: 3.1rem 0;

    box-sizing: content-box;

    font-size: 1.3rem; 
    font-weight: 700;
    text-transform: uppercase;
    
    letter-spacing: 0.08em;

    :hover{
        background-color: var(--orange2);
    }
`
