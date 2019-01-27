import React from "react";
import { registerAsWebComponent } from "react-webcomponentify";

export const Input = props => {
  return <input type="text" {...props} />;
};

registerAsWebComponent(Input, "my-input");
