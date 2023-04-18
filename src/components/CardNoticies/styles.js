import styled from "styled-components"

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;

    text-align: left;

    width: 376px;
    height: 380px;
    
    background-color: transparent;

    border: solid var(--dark3) 2px;

    margin: 2rem 0;

    .img{
        object-fit: cover;
        width: 100%;
        height: 200px;
    }
`

export const DescriptionCard = styled.div`
    text-align: left;
    padding: 0 2rem;

    h4{
        max-width: 600px;
        margin: 16px 0 24px;

        color: var(--white);

        text-transform: uppercase;

        font-size: 18px;
        font-family: 'Barlow';
        font-weight: 600;
    }

    span{
        font-size: 14px;
        font-family: 'Barlow';
        font-weight: 400;
        color: var(--grey2);
    }
`

export const Button = styled.button`
    background-color: var(--orange1);
    color: var(--black);

    width: 138px;
    height: 40px;
    
    border: none;
    border-radius: 4px;

    box-sizing: content-box;

    font-size: 14px; 
    font-weight: 700;
    text-transform: uppercase;
    
    letter-spacing: 0.08em;

    :hover{
        background-color: var(--orange2);
    }
`
