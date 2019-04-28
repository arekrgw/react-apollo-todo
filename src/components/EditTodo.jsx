import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const EditTodo = ({ config }) => {
  console.log(config);
  return ReactDOM.createPortal(
    <div>
      <div>
        <h1>dsadsadas</h1>
      </div>
    </div>,
    document.querySelector("#edit")
  );
};

export default EditTodo;
