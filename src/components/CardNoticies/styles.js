import styled from "styled-components"

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;

    text-align: left;

    width: 580px;
    height: max-content;
    
    background-color: transparent;

    border: solid var(--dark3) 2px;

    margin: 2rem 0 10rem;

    .img{
        object-fit: cover;
        width: 570px;
        height: 320px;

        margin: 0 0 2.2rem;
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

export const Button = styled.button`
    background-color: var(--orange1);
    color: var(--black);

    width: 170px;
    height: 35px;
    
    border: none;
    border-radius: 4px;

    padding: 14px 24px;
    margin-bottom: 2rem;

    box-sizing: content-box;

    font-size: 1.3rem; 
    font-weight: 700;
    text-transform: uppercase;
    
    letter-spacing: 0.08em;

    :hover{
        background-color: var(--orange2);
    }
`
