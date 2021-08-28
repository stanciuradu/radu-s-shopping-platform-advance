import styled from "styled-components";

export const ProductListRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  @media screen and (max-width:800px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }
`;

export const ProductListStyles = styled.div``;
