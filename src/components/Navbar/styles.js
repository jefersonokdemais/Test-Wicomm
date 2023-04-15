import styled from "styled-components";

export const Nav = styled.div`
    height: max-content;
    margin: -12px auto;
    background-color: var(--dark1);
    
    border-bottom: solid var(--gray1) 1px;
`

export const Block = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: ${props => props.buttom};

    a{
        color: var(--orange1);
        text-transform: uppercase;
        cursor: pointer;
        font-weight: bold;
    }

    li{
        cursor: pointer;
    }
    a, li:hover{
        color: var(--orange2);
    }
`

