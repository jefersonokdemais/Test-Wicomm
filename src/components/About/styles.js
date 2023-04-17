import styled from "styled-components"

export const View = styled.div`
    margin-top: 3rem; 
    width: 100%;

    margin: 0 0 70px 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1000px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 2rem;

    span{
        font-family: 'Barlow';
        font-size: 1.3rem;
    }

    img{
        width: 250px;
        filter: opacity(10%);

        position: relative;
        top: 130px;
    }
`

export const H2 = styled.h2`
    margin: 0 3rem;

    font-size: 3rem;
    font-style: italic;

    text-transform: uppercase;
    text-align: left;

    max-width: 1000px;
    color: var(--black);
`