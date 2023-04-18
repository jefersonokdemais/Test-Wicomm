import styled from "styled-components"

export const CardContent = styled.div`
    width: 277x;
    height: 340px;
    
    .img{
        object-fit: cover;
        height: 340px;
        width: 277px;

        filter: grayscale(1);
    }
`

export const Legend = styled.div`
    display: flex;
    align-items: center;

    position: relative;
    bottom: 44px;

    background-color: var(--orange1);

    height: 40px;
    width: 212px;

    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
`

export const H4 = styled.h4`
    margin-left: 5px;
    font-size: 14px;
    font-style: italic;
    text-transform: uppercase;
`
