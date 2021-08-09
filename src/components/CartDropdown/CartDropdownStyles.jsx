import styled from "styled-components";
import { Link } from "react-router-dom";
export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessage = styled.p`
  font-size: 18px;
  margin: 50px auto;
`;

export const LinkDropdown = styled(Link)`
  text-decoration: none;
`;
