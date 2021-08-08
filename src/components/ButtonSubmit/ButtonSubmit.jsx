// ButtonSubmit este o componenta simpla reutilizabilă
import React from "react";
import "../../components/ButtonSubmit/ButtonSubmit.scss";

function ButtonSubmit(props) {
  const { children,inverted, ...otherProps } = props;
  return (
    <div>
      <button type="button" className={`${inverted?'inverted':''}custom-button`} {...otherProps}>
        {children}
      </button>
    </div>
  );
}

export default ButtonSubmit;
