import React, { Component } from "react";
import FormInput from "../components/FormInput/FormInput";
import ButtonSubmit from "../components/ButtonSubmit/ButtonSubmit";

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }
  handleChangeName(event) {
    const newName = event.target.value;
    this.setState({ name: newName });
  }
  handleChangeEmail(event) {
    const newEmail = event.target.value;
    this.setState({ email: newEmail });
  }
  handleChangePassword(event) {
    const newPassword = event.target.value;
    this.setState({ password: newPassword });
  }
  handleChangeConfirmPassword(event) {
    const newConfirmPassword = event.target.value;
    this.setState({ confirmPassword: newConfirmPassword });
  }

  handleSubmitForm(event) {
    event.preventDefault();
    this.setState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }
  render() {
    return (
      <div className="sign-in">
        <div className="sign-in-details">
          <h4>I don't have an account</h4>
          <span>SignUp with your email and password</span>
        </div>
        <form onSubmit={(event) => this.handleSubmitForm(event)}>
          <FormInput
            type="text"
            name="name"
            value={this.state.name}
            label="name"
            handleChange={(name) => this.handleChangeName(name)}
          />
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            handleChange={(event) => this.handleChangeEmail(event)}
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            handleChange={(event) => this.handleChangePassword(event)}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            label="confirmPassword"
            handleChange={(event) => this.handleChangeConfirmPassword(event)}
          />
          <div className="button-submit">
            <ButtonSubmit type="submit">SignUp</ButtonSubmit>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
