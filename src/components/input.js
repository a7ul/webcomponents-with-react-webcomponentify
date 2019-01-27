import React from "react";
import { registerAsWebComponent } from "react-webcomponentify";

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonText: "" };
    this.onInputEnter = this.onInputEnter.bind(this);
  }
  onInputEnter(evt) {
    this.setState({
      buttonText: evt.target.value
    });
  }
  render() {
    return (
      <div>
        <input
          style="width:200px;height:40px;padding:10px;font-size:14px;border:2px solid blue;"
          type="text"
          placeholder="enter some text here"
          onChange={this.onInputEnter}
        />
        <br />
        <br />
        <code>Value of this.state.buttonText: </code>
        {this.state.buttonText}
      </div>
    );
  }
}

registerAsWebComponent(Input, "my-input");

/*
 In html: 
 <my-input></my-input>
*/
