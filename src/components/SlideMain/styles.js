import styled from "styled-components";

export const Slide = styled.div`
    height: 548px;
    background-image: url(${props => props.img});
    background-size: cover;
`

export const H1 = styled.h1`
    margin-top: 130px;

    font-size: 56px;
    font-style: italic;

    text-transform: uppercase;
    text-align: left;
    
    max-width: 600px;
    color: var(--white);

    span{
        color: var(--orange1);
    }
`

export const P = styled.p`
    font-size: 16px;
    font-family: 'Barlow';
    font-weight: 400;

    margin-top: 1.2rem;

    max-width: 400px;

    text-align: left;

    color: var(--white);
`

export const Button = styled.button`
    background-color: var(--orange1);
    color: var(--black);

    width: ${props=> props.width ? props.width : "120px"};
    height: 48px;
    
    border: none;
    border-radius: 4px;

    margin: 32px 0;

    box-sizing: content-box;

    font-size: 16px; 
    font-weight: 700;
    text-transform: uppercase;
    
    letter-spacing: 0.08em;

    :hover{
        background-color: var(--orange2);
    }
`

export const NavToHome = styled.a`
    width: 56px;
    height: 56px;

    border-radius: 4px;

    font-family: 'Barlow';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--grey1);
    color: var(--black);

    position: fixed;
    bottom: 50px;
    right: 6px;

    :hover{
        cursor: pointer;
        background-color: var(--grey2);
    }
`

export const NavToContact = styled.a`
    width: 134px;
    height: 40px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 6px;

    border-radius: 6px 6px 0 6px;

    font-family: 'Barlow';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: center;

    background-color: var(--orange1);
    color: var(--black);

    position: fixed;
    bottom: 3px;
    right: 6px;

    :hover{
        cursor: pointer;
        background-color: var(--orange2);
        border: solid var(--dark2) 1px;
    }
`