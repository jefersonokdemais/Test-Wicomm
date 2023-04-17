import styled from "styled-components"

export const CardContent = styled.div`
    width: 480px;
    height: 550px;
    
    .img{
        object-fit: cover;
        width: 100%;
        height: 100%;

        margin: 0 0 2.2rem;
        filter: grayscale(1);
    }
`

export const DescriptionCard = styled.div`
    text-align: left;
    padding: 0 2rem;

    h4{
        max-width: 600px;
        margin: 1.6rem 0;

        color: var(--white);

        text-transform: uppercase;

        font-size: 1.7rem;
        font-family: 'Barlow';
        font-weight: 600;
    }

    span{
        font-size: 1.2rem;
        font-family: 'Barlow';
        font-weight: 400;
        color: var(--grey2);
    }
`

export const Legend = styled.div`
    display: flex;
    align-items: center;

    position: relative;
    bottom: 99px;

    background-color: var(--orange1);

    height: 60px;
    width: 80%;

    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
`

export const H4 = styled.h4`
    margin-left: 1.5rem;
    font-size: 1.3rem;
    font-style: italic;
    text-transform: uppercase;
`
