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
          type="text"
          placeholder="enter some text here"
          onChange={this.onInputEnter}
        />
        <br />
        <code>Value of this.state.buttonText: </code>
        {this.state.buttonText}
      </div>
    );
  }
}

registerAsWebComponent(Input, "my-input");
