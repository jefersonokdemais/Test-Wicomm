import styled from "styled-components"

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;

    text-align: left;

    width: 380px;
    height: max-content;
    
    background-color: transparent;

    border: solid var(--dark3) 2px;

    margin: 2rem 0;

    .img{
        object-fit: cover;
        width: 100%;
        height: 220px;

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

        font-size: 1.2rem;
        font-family: 'Barlow';
        font-weight: 600;
    }

    span{
        font-size: 1rem;
        font-family: 'Barlow';
        font-weight: 400;
        color: var(--grey2);
    }
`

export const Button = styled.button`
    background-color: var(--orange1);
    color: var(--black);

    width: 120px;
    height: 30px;
    
    border: none;
    border-radius: 4px;

    padding: 10px 20px;
    margin-bottom: 2rem;

    box-sizing: content-box;

    font-size: 1.1rem; 
    font-weight: 700;
    text-transform: uppercase;
    
    letter-spacing: 0.08em;

    :hover{
        background-color: var(--orange2);
    }
`
