import styled from "styled-components";

export const Slide = styled.div`
    height: 85vh;
    background-image: url(${props => props.img});
    background-size: 100vw;
    background-repeat: no-repeat;
    object-fit: cover;
    /* background-size: 100% 42vw; */
`

export const H1 = styled.h1`
    margin-top: 7rem;

    font-size: 5.3rem;
    font-style: italic;

    text-transform: uppercase;
    text-align: left;
    
    max-width: 1000px;
    color: var(--white);

    span{
        color: var(--orange1);
    }
`

export const P = styled.p`
    font-size: 1.8rem;
    font-family: 'Barlow';
    font-weight: 200;

    margin-top: 1.2rem;

    max-width: 620px;

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
