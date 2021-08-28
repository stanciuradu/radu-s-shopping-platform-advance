import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: column;
`;

export const SignInDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;
`;

export const ButtonSubmitStyles = styled.div`
  display: flex;
  @media screen and (max-width:800px){
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 20px;
    }
`;
