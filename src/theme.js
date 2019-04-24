import styled, { createGlobalStyle } from "styled-components";

export const themeSchema = {
  color: {
    dark: "#030609",
    lighterdark: "#0D1522",
    red: "#F40000",
    light: "#EAFBFC",
    lemon: "#D7EA00",
    orange: "#F75C03"
  },
  fontSize: {
    extrasmall: "1.2rem",
    small: "1.4rem",
    medium: "2rem",
    large: "3.2rem",
    extralarge: "4rem"
  }
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Bai+Jamjuree:300,400,700&subset=latin-ext');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Bai Jamjuree', sans-serif;

  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.light}
    background: ${({ theme }) => theme.color.dark}
  }

`;

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  margin: 10px auto;
  padding: 15px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.lighterdark};
  box-shadow: 0 0 10px 7px #00000067;
`;
