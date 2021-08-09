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
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 50%;
  height: 50%;
`;

export const NameChechkoutItem = styled.div`
  width: 23%;
`;

export const PriceChechkoutItem = styled.div`
  width: 23%;
`;

export const RemoveButtonChechkoutItem = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
