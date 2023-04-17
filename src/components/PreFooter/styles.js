import styled from "styled-components";

export const View = styled.div`
    width: 100%;

    background-color: var(--dark1);

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: row;

    border-bottom: solid var(--dark3) 2px;
`
export const InsideView = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
`

export const Column1 = styled.div`
    width: 15%;
    margin: 0 1rem;
    height: max-content;
    
    padding-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 2rem;

    img{
        width: 250px;
        position: relative;
        top: -20px;
        margin-bottom: -20px;
    }

    span{
        font-family: "Barlow";
        font-size: 1rem;

        color: var(--white);
    }

    .rede-sociais{
        width: 80%;
        display: flex;
        justify-content: space-between;
    }
    .rede-sociais:hover{
        cursor:pointer;
    }

    .react-icons{
        width: 80px;
        height: 80px;
        color: pink;
    }

`

export const ColumnLinks = styled.div`
    width: 32%;
    height: max-content;

    padding-top: 2rem;
    margin: 0 1.5rem;

    display: flex;
    justify-content: center;
    flex-direction: column;

    text-align: left;
    gap: 1.5rem;

    h3{
        text-transform: uppercase;
        font-size: 1rem;
        color: var(--white);
    }
    .links{
        display: flex;
        flex-direction: column;

        gap: 1rem;
    }


    a{
        font-family: "Barlow";
        font-size: 1rem;

        color: var(--grey1);
    }
    a:hover{
        cursor: pointer;
        color: var(--orange1);
    }
`

export const ColumnMarketingNoticies = styled.div`
    border-left: solid var(--dark3) 2px;
    padding: 2rem 2rem ;

    height: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    
    h3{ 
        max-width: 200px;
        font-size: 2rem;
        font-family: "Barlow";
        text-transform: uppercase;
        color: var(--white);

        span{
            color: var(--orange1);
        }
    }

    span{
        font-family: "Barlow";
        color: var(--grey1);
    }
`

export const PaymentsIcons = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: row;

    gap: 3rem;
    margin: 2rem 2.2rem;

    
`

export const BoxIcons = styled.div`
    img{
        position: relative;
        left: 20px;
    }
    h5{
        font-size: 1rem;
        text-transform: uppercase;
        color: var(--white);
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
    
    font-size: 1.3rem; 
    font-weight: 700;
    text-transform: uppercase;
    
    letter-spacing: 0.08em;

    :hover{
        background-color: var(--orange2);
    }
`