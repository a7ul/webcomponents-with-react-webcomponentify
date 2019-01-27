import React from "react";
import { registerAsWebComponent } from "react-webcomponentify";

export const Button = props => {
  return (
    <button
      style="height:40px;font-weight:bold;"
      id={props.id}
      onClick={props.onClick}
    >
      {props.text || "Hello"}
    </button>
  );
};

registerAsWebComponent(Button, "my-button");

/*
 In html: 
 <my-button></my-button>
 or
<my-button id="my-custom-btn" text="my kickass button"></my-button>

and 

<script type="text/javascript"> 
  window.onload = function() {
    var myBtn = document.getElementById("my-custom-btn");
    myBtn.setProps({
      onClick: function() {
        console.log("my-button was clicked");
      }
    });
  };
</script>
*/
