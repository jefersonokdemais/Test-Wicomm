import styled from "styled-components";

export const View = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 3rem;

    background-color: var(--black);

    span{
        font-family: "Barlow";
        font-size: 1rem;

        color: var(--white);
    }

    .logos{
        display: flex;
        gap: 2rem;
    }
`