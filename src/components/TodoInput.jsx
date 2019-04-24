import styled from "styled-components";
import React from "react";

const StyledInput = styled.input`
  border: thin solid ${({ theme }) => theme.color.lemon};
  background: ${({ theme }) => theme.color.dark}
  padding: 5px 10px;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.light}
  font-size: ${({ theme }) => theme.fontSize.medium}
  outline: none;
  transition: border-color .3s ease-in
  margin-bottom: 7px;

  &:focus {
    border-color: ${({ theme }) => theme.color.orange};
  }
`;

const TodoInput = ({ value, onChange, placeholder, updateVal, enterPress }) => (
  <StyledInput
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={e => updateVal(e.target.value)}
    onKeyPress={e => enterPress(e)}
  />
);

export default TodoInput;
