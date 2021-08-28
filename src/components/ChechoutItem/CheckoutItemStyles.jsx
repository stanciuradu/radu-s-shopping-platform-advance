import styled from "styled-components";

export const ChechoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: 0px;
  min-height: 100px;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  border-bottom: 1px solid grey;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  @media screen and (max-width: 800px) {
    margin-bottom: 1rem;
  }
`;

export const Image = styled.img`
  width: 50%;
  height: 50%;
`;

export const NameChechkoutItem = styled.div`
  width: 23%;
  @media screen and (max-width: 800px) {
    margin-bottom: 1rem;
  }
`;

export const PriceChechkoutItem = styled.div`
  width: 23%;
  @media screen and (max-width: 800px) {
    margin-bottom: 1rem;
  }
`;

export const RemoveButtonChechkoutItem = styled.div`
  padding-left: 12px;
  cursor: pointer;
  margin-right: 5rem;
`;
