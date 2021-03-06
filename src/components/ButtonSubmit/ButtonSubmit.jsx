// ButtonSubmit este o componenta simpla reutilizabilă
import React from "react";
import { ButtonSubmitContainer } from "./ButtonSubmitStyles";
function ButtonSubmit(props) {
  const { children, ...otherProps } = props;
  return (
    <div>
      <ButtonSubmitContainer {...otherProps}>{children}</ButtonSubmitContainer>
    </div>
  );
}

export default ButtonSubmit;
