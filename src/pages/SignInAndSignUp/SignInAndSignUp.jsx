import React from "react";
// import "../SignInAndSignUp/SignInAndSignUp.scss";
import SignIn from "../../components/SignIn/SignIn";
import Register from "../../components/Register/Register";
import { SignInAndSignUpContainer } from "./SignInAndSignUpStyles";

function SignInAndSignUp() {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <Register />
    </SignInAndSignUpContainer>
  );
}

export default SignInAndSignUp;
