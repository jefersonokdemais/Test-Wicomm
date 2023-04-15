import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }
  
  body, input, button {
    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5{
    font-family: 'Roboto Condensed', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  img{
    object-fit: cover;
  }

  :root {
    --white: #FFFFFF;
    --black: #0B0B0B;

    --orange1: #FF9601;
    --orange2: #FFC470;

    --dark1: #1C1C1E;
    --dark2: #2C2C2E;
    --dark3: #3A3A3C;

    --grey1: #9A9A9A;
    --grey2: #CACACA;

    --background: #F1F1F1;
;

    --radius-inputs-buttons: 0.3rem;
    --box-shadow: 0px 0px 40px -20px rgba(0, 0, 0, 0.25);
    --container-size: 1200px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.direction ? props.direction : "column"};

  gap: ${props=> props.gap ? "2.2rem" : "0"};

  width: 100%;
  max-width: ${props => props.width ? props.width : "1780px"};

  margin: 0 auto;
  padding: .8rem;

  img{
      height: 80px;
  }
`
