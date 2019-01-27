import React from "react";
import { registerAsWebComponent } from "react-webcomponentify";

export const Button = props => {
  return (
    <button {...props} onClick={props.onClick}>
      {props.text || "Hello"}
    </button>
  );
};

registerAsWebComponent(Button, "my-button");
