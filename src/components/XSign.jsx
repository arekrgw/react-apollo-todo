import styled from "styled-components";
import React from "react";

const X = styled.div`
  width: 26px;
  height: 26px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    width: calc(26px * 1.2);
    display: block;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) rotate(45deg);
    background: ${({ theme }) => theme.color.red}
    height: 5px;
    border-radius: 3px;
  }
  &::before {
    content: '';
    position: absolute;
    width: calc(26px * 1.2);
    display: block;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%) rotate(-45deg);
    background: ${({ theme }) => theme.color.red}
    height: 5px;
    border-radius: 3px;
  }
`;

const XSign = props => {
  return <X onClick={props.onClick} />;
};

export default XSign;
