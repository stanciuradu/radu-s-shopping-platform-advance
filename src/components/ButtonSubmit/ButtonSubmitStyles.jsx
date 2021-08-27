// ->stilizarea props-urilor din cadrul unei componente cu Style-components
import styled from "styled-components";
function getButtonStyles(props) {
    const { googleSignIn, inverted } = props;
    if (googleSignIn) {
      return googleSignInStyles;
    }
    return inverted ? invertedBuutonStyles : ButtonSubmitContainer;
  }
  
export const ButtonSubmitContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: blue;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-right: 1rem;
  ${getButtonStyles}
  .link {
    text-decoration: none;
  }

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const invertedBuutonStyles = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const googleSignInStyles = styled.button`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
