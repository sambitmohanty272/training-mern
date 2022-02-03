import logo from './logo.svg';
import './App.css';

import React from "react";

function CustomButtom(props) {
  return (
    <div style={{ padding: "5px" }}>
      <button onClick={() => alert(`The button pressed is ${props.id}`)}>
        Button {props.name}
      </button>
    </div>
  );
}

export default CustomButtom;