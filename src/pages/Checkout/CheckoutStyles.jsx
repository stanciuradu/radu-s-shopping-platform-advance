import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export const CheckoutHeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  display: flex;
  @media screen and (max-width:800px){
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    }
  &:last-child {
    width: 8%;
  }
  
`;

export const Product = styled.div`
  margin-right: 3rem;
  margin-left: 5.3rem;
`;

export const Description = styled.div`
  margin-right: 3rem;
  margin-left: 5.3rem;
`;

export const Price = styled.div`
  margin-right: 3rem;
  margin-left: 5.3rem;
`;

export const Remove = styled.div`
  margin-right: 3rem;
  margin-left: 5.3rem;
`;

export const TotalCost = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
