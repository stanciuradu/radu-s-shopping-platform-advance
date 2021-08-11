import styled from "styled-components";

export const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductItemImage = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 75%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  &:hover {
    opacity: 0.8;
  }
`;

export const ProductItemDetailsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ProductItemName = styled.div`
  width: 90%;
  margin-bottom: 15px;
`;

export const ProductItemPrice = styled.div`
  width: 10%;
`;
