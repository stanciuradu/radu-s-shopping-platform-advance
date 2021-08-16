import React, { useState } from "react";
import "../SignIn/SignIn.scss";
import FormInput from "../FormInput/FormInput";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
// import functia de autentificare cu Google
import { signInWithGoogle } from "../../apis/firebase";
import { useHistory } from "react-router";
function SignIn() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // metoda de logare cu Google
  // prin history.push se redirectioneaza user-ul catre pagina de Home
  function SignInWithGoogle() {
    signInWithGoogle();
    history.push("/");
  }

  function handleSubmit(event) {
    //   prevenirea comportameentului default la formularului
    event.preventDefault();
    // resetarea formularului dupa completare
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <div className="sign-in">
        <div className="sign-in-details">
          <h4>I have already personal account</h4>
          <span>SignIn with your email and password</span>
        </div>
        <form onSubmit={(event) => handleSubmit(event)}>
          {/* actuaziez inputului cu, componenta FormInput care are style-ul pregatit */}
          <FormInput
            type="email"
            name="email"
            value={email}
            label="email"
            handleChange={(event) => setEmail(event.target.value)}
            require
          />
          {/* actuaziez inputului cu, componenta FormInput care are style-ul pregatit */}
          <FormInput
            type="password"
            name="password"
            value={password}
            label="password"
            handleChange={(event) => setPassword(event.target.value)}
            require
          />
          <div className="button-submit">
            <ButtonSubmit type="submit">Sign In</ButtonSubmit>
            {/* atasez la butonul de submit eventul onClick cu functia importata */}
            <ButtonSubmit
              onClick={() => SignInWithGoogle()}
              className="sign-in-with-google"
            >
              Sign In with Google
            </ButtonSubmit>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
