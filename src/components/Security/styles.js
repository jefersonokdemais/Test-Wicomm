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
    
    width: 45%;
    height: 400px;

    background-image: linear-gradient(to top right, var(--black), grey);
`

export const H2 = styled.h2`
    margin: 0 3rem;

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

export const Buttom = styled.h2`
    background-color: var(--orange1);
    color: var(--black);

    width: 160px;
    height: 58px;

    border: none;
    border-radius: 4px;

    padding: 1rem;
    
    margin: 0 3rem;

    font-size: 1.3rem; 
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
    width: 40%;
    height: 100%;

    margin-top: 2rem;

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
`