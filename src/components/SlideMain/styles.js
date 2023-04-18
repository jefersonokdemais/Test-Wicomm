import styled from "styled-components";

export const Slide = styled.div`
    height: 548px;
    background-image: url(${props => props.img});
    background-size: cover;
`

export const H1 = styled.h1`
    margin-top: 130px;

    font-size: 56px;
    font-style: italic;

    text-transform: uppercase;
    text-align: left;
    
    max-width: 600px;
    color: var(--white);

    span{
        color: var(--orange1);
    }
`

export const P = styled.p`
    font-size: 16px;
    font-family: 'Barlow';
    font-weight: 400;

    margin-top: 1.2rem;

    max-width: 400px;

    text-align: left;

    color: var(--white);
`

export const Button = styled.button`
    background-color: var(--orange1);
    color: var(--black);

    width: ${props=> props.width ? props.width : "120px"};
    height: 48px;
    
    border: none;
    border-radius: 4px;

    margin: 32px 0;

    box-sizing: content-box;

    font-size: 16px; 
    font-weight: 700;
    text-transform: uppercase;
    
    letter-spacing: 0.08em;

    :hover{
        background-color: var(--orange2);
    }
`
