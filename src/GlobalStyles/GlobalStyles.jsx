import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Courgette', cursive;
    padding: 20px 60px;
    @media screen and (max-width:800px){
        padding: 10px;
    }
}
*{
    box-sizing: border-box;
}
`;
