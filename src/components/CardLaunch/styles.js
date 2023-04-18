import styled from "styled-components"

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    width: 277px;
    height: 341px;
    
    background-color: var(--white);

    border: solid var(--background) 2px;
    border-radius: 7px;

    margin-bottom: 5rem;

    #img{
        height: 165px;
        margin-top: 2rem;
    }
`

export const DescriptionCard = styled.div`
    text-align: left;

    h3{
        color: var(--orange1);
        font-family: 'Barlow';
        font-size: 22px;
        font-weight: 700;
    }

    h4{
        max-width: 230px;
        margin: -70px 0 12px 0;

        color: var(--black1);

        text-transform: uppercase;

        font-size: 12px;
        font-family: 'Barlow';
        font-weight: 600;
    }

    span{
        font-size: 1rem;
        font-family: 'Barlow';
        font-weight: 400;
        margin-bottom: 14px;
        color: var(--dark3);
    }
`
