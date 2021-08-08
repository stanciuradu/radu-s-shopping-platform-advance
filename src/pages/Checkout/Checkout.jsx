import React from "react";
import "../Checkout/Checkout.scss";
import { connect } from "react-redux";
import CheckoutItem from "../../components/ChechoutItem/CheckoutItem";
import StripeButton from "../../components/StripeButton/StripeButton";

function Checkout(props) {
  const { products } = props;
  function totalSum(products) {
    return products.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span className="product">Product</span>
          <span className="description">Description</span>
          <span className="price">Price</span>
          <span className="remove">Remove</span>
        </div>
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
      </div>
      <div className="total">
        <span>Total:{totalSum(products)}€</span>
      </div>
      <StripeButton price={totalSum} />
    </div>
  );
}
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(Checkout);
