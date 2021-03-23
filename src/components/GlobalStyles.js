import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: "Quicksand", "Montserrat", "Corbel Light", sans-serif;
}

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: 0.50s linear;
  }
  `;
