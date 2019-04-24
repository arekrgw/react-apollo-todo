import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  color: ${({ theme }) => theme.color.lemon}
  border: 1.5px solid ${({ theme }) => theme.color.lemon}
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.small}
  font-weight: 600;
  background: none;
  padding: 7px 12px;
  width: 150px;
  cursor: pointer;
  transition: all .3s ease-in-out;
  align-self: flex-end;
  outline: none;
  margin-bottom: 25px;

  &:hover, &:focus {
    background: ${({ theme }) => theme.color.lemon};
    color: #000
  }
`;

const Button = ({ children, addTodo }) => (
  <StyledButton onClick={() => addTodo()}>{children}</StyledButton>
);

export default Button;
