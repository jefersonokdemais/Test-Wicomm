import styled from "styled-components"

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 250px;
    height: 430px;
    
    background-color: var(--white);

    border: solid var(--background) 2px;
    border-radius: 7px;

    margin-bottom: 5rem;

    #img{
        height: 35%;
        margin-top: 2rem;
    }
`

export const DescriptionCard = styled.div`
    text-align: left;

    h3{
        color: var(--orange1);
        font-family: 'Barlow';
        font-size: 2rem;
        font-weight: 700;
    }

    h4{
        max-width: 230px;
        margin-bottom: 1rem;

        color: var(--black1);

        text-transform: uppercase;

        font-size: 1.1rem;
        font-family: 'Barlow';
        font-weight: 600;
    }

    span{
        font-size: 1rem;
        font-family: 'Barlow';
        font-weight: 400;
        margin-bottom: 2rem;
        color: var(--dark3);
    }
`
