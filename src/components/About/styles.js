import styled from "styled-components"

export const View = styled.div`
    margin-top: 1rem; 
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Container = styled.div`
    width: 100%;
    max-width: 800px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span{
        font-family: 'Barlow';
        font-size: 16px;
        margin: 24px 0 64px;
    }

    img{
        width: 160px;
        filter: opacity(10%);

        position: relative;
        top: 65px;
    }
`

export const H2 = styled.h2`
    font-size: 32px;
    font-style: italic;

    text-transform: uppercase;
    text-align: left;

    color: var(--black);
`
