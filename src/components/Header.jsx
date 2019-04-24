import styled from "styled-components";
import React from "react";

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  text-align: center;
  margin-bottom: 20px;
`;

const Header = () => {
  return <StyledH1>React/Apollo Local State Todo List</StyledH1>;
};

export default Header;
