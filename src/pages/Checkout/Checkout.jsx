import React from "react";
// import "../Checkout/Checkout.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../components/ChechoutItem/CheckoutItem";
import StripeButton from "../../components/StripeButton/StripeButton";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  CheckoutHeaderBlockContainer,
  Product,
  Description,
  Price,
  Remove,
  TotalCost,
} from "./CheckoutStyles";

function Checkout(props) {
  const { products } = props;
  function totalSum(products) {
    return products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }

  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <CheckoutHeaderBlockContainer>
          <Product>
            <div>Product</div>
          </Product>
          <Description>
            <div>Description</div>
          </Description>
          <Price>
            <div>Price</div>
          </Price>
          <Remove>
            <div>Remove</div>
          </Remove>
        </CheckoutHeaderBlockContainer>
        {products.map((product, index) => {
          return (
            <CheckoutItem
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price}
              currency={product.currency}
              key={index}
            />
          );
        })}
      </CheckoutHeaderContainer>
      <TotalCost>
        <span>
          <div>Total:{totalSum(products)}€</div>
        </span>
      </TotalCost>
      <StripeButton price={totalSum} />
    </CheckoutPageContainer>
  );
}
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(Checkout);
