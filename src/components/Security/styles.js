import styled from "styled-components";

export const View = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 2rem;
`

export const Block = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    margin-top: 3rem;
    
    width: 475px;
    height: 280px;

    background-image: linear-gradient(to top right, var(--black), grey);
`

export const H2 = styled.h2`
    margin: 0 40px;

    font-size: 40px;
    font-style: italic;

    text-transform: uppercase;
    text-align: left;

    max-width: 300px;
    color: var(--white);

    span{
        color: var(--orange1);
    }
`

export const Buttom = styled.button`
    background-color: var(--orange1);
    color: var(--black);

    width: 138px;
    height: 40px;
    
    border: none;
    border-radius: 4px;
    margin-left: 40px;

    font-size: 14px; 
    font-weight: 700;
    text-transform: uppercase;
    
    letter-spacing: 0.08em;

    :hover{
        background-color: var(--orange2);
    }
`

export const Description = styled.div`
    width: 70%;
    height: 100%;

    gap: 3rem;

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
`

export const DivIcon = styled.div`
    width: 35%;
    height: 100%;

    margin-top: 2rem;

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
`