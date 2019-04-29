import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  color: ${({ theme }) => theme.color.light}
  margin: 20px 0;
  font-size: ${({ theme }) => theme.fontSize.small}
  text-align: center
`;

const NoTodos = () => {
  return <StyledP>Add your first Todo by form above!</StyledP>;
};

export default NoTodos;
