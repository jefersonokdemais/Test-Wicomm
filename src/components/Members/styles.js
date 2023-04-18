import styled from "styled-components";

export const View = styled.div`
    background-color: var(--black);
    height: 461px;

    img{
        width: 277px;
        height: 294px;

    }
`

export const H2 = styled.h2`
    font-size: 40px;
    font-style: italic;
    margin: 40px 0 24px;

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

    width: 139px;
    height: 48px;
    
    position: relative;
    top: 30px;

    border: none;
    border-radius: 4px;

    box-sizing: content-box;

    font-size: 16px; 
    font-weight: 700;
    text-transform: uppercase;
    line-height: 20px;
    
    letter-spacing: 0.08em;

    :hover{
        background-color: var(--orange2);
    }
`
