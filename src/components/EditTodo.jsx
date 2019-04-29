import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Mutation } from "react-apollo";
import { EDIT_TODO } from "../queries";

const OuterDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #000000cf;
  z-index: 10;
`;

const EditingInput = styled.textarea`
    position: absolute;
    top: ${({ config }) => `${config.y}px`}
    left: ${({ config }) => `${config.x}px`}
    width: ${({ config }) => `${config.width}px`}
    height: ${({ config }) => `${config.height}px`}
    font-size: ${({ config }) => (config.type === "name" ? "18px" : "14px")}
    border: thin solid ${({ theme }) => theme.color.lemon}
    color: ${({ theme }) => theme.color.light}
    background: ${({ theme }) => theme.color.lighterdark}
    box-sizing: content-box;
    outline: none;
    resize: none
    
`;

const Title = styled.h4`
  position: absolute;
  font-size: 1.6rem;
  line-height: 1.6rem
  color: ${({ theme }) => theme.color.light};
  left: ${({ config }) => `${config.x}px`}
  top: ${({ config }) => `${config.y - 18}px`}

`;

const EditTodo = ({ config, closeEdit }) => {
  const [edited, setEdit] = useState(config.value);
  console.log(config);
  const handleSubmit = runEdit => {
    runEdit();
    closeEdit();
  };
  return ReactDOM.createPortal(
    <Mutation
      mutation={EDIT_TODO}
      variables={{ id: config.id, type: config.type, value: edited }}
    >
      {editTodo => (
        <OuterDiv onClick={() => handleSubmit(editTodo)}>
          <Title onClick={e => e.stopPropagation()} config={config}>
            Edit {config.type}:
          </Title>
          <EditingInput
            onClick={e => e.stopPropagation()}
            config={config}
            value={edited}
            onChange={e => setEdit(e.target.value)}
          />
        </OuterDiv>
      )}
    </Mutation>,
    document.querySelector("#edit")
  );
};

export default EditTodo;
