import styled from "styled-components";
import { Link } from "react-router-dom";
// ->in componenta Header observam un HeaderContainer care este tot HTML-ul returnat,
// ->un LogoContainer pentru stuilizarea imaginii,
// ->un OptionsContainer
// ->un OptionLinkContaier
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  align-items: center;
  @media screen and (max-width:800px){
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;
// deaorece imaginea este un Link
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  margin-bottom: 3rem;
  @media screen and (max-width:800px){
        width: 20px;
        padding: 0px;
    }
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  @media screen and (max-width:800px){
        width: 80%;
    }
`;
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
