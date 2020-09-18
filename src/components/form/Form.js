import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getContact({ ...this.state, id: uuidv4() });
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Name</h2>

        <label>
          Name:
          <TextField
            id="outlined-basic"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Phone number:
          <TextField
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <Button variant="contained" color="primary" type="submit">
          Add Contact
        </Button>
      </form>
    );
  }
}
export default Form;
