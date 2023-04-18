import styled from "styled-components";

export const View = styled.div`
    width: 100%;
    height: 88px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 3rem;

    background-color: var(--black);

    span{
        font-family: "Barlow";
        font-size: 16px;

        color: var(--white);
    }

    .logos{
        display: flex;
        gap: 2rem;
    }
    .logo{
        object-fit: contain;
        width: 96px;
    }
`