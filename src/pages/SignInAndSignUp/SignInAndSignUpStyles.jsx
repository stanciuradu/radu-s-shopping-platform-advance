import styled from "styled-components";
export const SignInAndSignUpContainer = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;
