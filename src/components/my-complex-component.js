import React from "react";
import { registerAsWebComponent } from "react-webcomponentify";

const MyComplexComponent = props => (
  <div>
    Kinda complex component 😂
    <p>{props.text}</p>
    <div>{props.children}</div>
  </div>
);

registerAsWebComponent(MyComplexComponent, "my-complex-component");

/*
 In html: 
<my-complex-component text="component with children">
    <p> I am a child element</p>
    <div> I am another childish 
        <button>button</button>
    </div>  
</my-complex-component>
*/
