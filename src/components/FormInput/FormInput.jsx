import React from "react";
import "../FormInput/FormInput.scss";

function FormInput(props) {
  // componenta primeste drept props-uir toate atributele de HTML ale tagului de input din form
  const { handleChange, label, type, name, value } = props;
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...type}
        {...name}
        {...value}
      />
      {label ? (
        // aplica un operator ternar->daca lunigmiea valorii este in lable, atunc aplic clasa de style shrink, altfel lable-ul va fin un string gol
        // lable-ul va fi stilizat intotdeauna dupa clasa form-input-lable
        <lable className={`${value.length ? "shrink" : ""} form-input-label`}>
          {label}
        </lable>
      ) : null}
    </div>
  );
}

export default FormInput;
