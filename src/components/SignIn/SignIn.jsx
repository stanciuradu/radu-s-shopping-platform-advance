import React, { Component } from "react";
import "../SignIn/SignIn.scss";
import FormInput from "../FormInput/FormInput";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
// import functia de autentificare cu Google
import { signInWithGoogle } from "../../apis/firebase";
import { withRouter } from "react-router-dom";
export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      // initial campurile pentru email si parola sunt goale, necompletate in cadrul formularului
      email: "",
      password: "",
    };
  }
  // metoda de logare cu Google
  // prin history.push se redirectioneaza user-ul catre pagina de Home
  handleSignInWithGoogle() {
    signInWithGoogle();
    this.props.history.push("/");
  }
  // metoda pentru a face update campupui de email
  handleChangeEmail(event) {
    const newEmail = event.target.value;
    this.setState({ email: newEmail });
  }
  // metoda pentu a face update campului de password
  handleChangePassword(event) {
    const newPassword = event.target.value;
    this.setState({ password: newPassword });
  }
  // metoda pentru submiterea formularului
  handleSubmit(event) {
    //   prevenirea comportameentului default la formularului
    event.preventDefault();
    // resetarea formularului dupa completare
    this.setState({
      email: "",
      password: "",
    });
  }
  render() {
    // in cadrul formularului dorim sa stilizam fiecare input, motiv pentru care vom crea o noua componenta simpla de tip FormInput
    return (
      <div className="sign-in">
        <div className="sign-in-details">
          <h4>I have already personal account</h4>
          <span>SignIn with your email and password</span>
        </div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          {/* actuaziez inputului cu, componenta FormInput care are style-ul pregatit */}
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            label="email"
            handleChange={(event) => this.handleChangeEmail(event)}
            require
          />
          {/* actuaziez inputului cu, componenta FormInput care are style-ul pregatit */}
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="password"
            handleChange={(event) => this.handleChangePassword(event)}
            require
          />
          <div className="button-submit">
            <ButtonSubmit type="submit">Sign In</ButtonSubmit>
            {/* atasez la butonul de submit eventul onClick cu functia importata */}
            <ButtonSubmit
              onClick={() => this.handleSignInWithGoogle()}
              className="sign-in-with-google"
            >
              Sign In with Google
            </ButtonSubmit>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
