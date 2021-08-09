import React from "react";
// import "../ChechoutItem/CheckoutItem.scss";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/cart/cartActions";
import { ChechoutItemContainer, ImageContainer, Image, NameChechkoutItem, PriceChechkoutItem, RemoveButtonChechkoutItem } from "./CheckoutItemStyles";
function CheckoutItem(props) {
  const { name, imageUrl, price, currency, removeFromCartWithDispatch } = props;
  return (
    <ChechoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="item" />
      </ImageContainer>
      <NameChechkoutItem>
        <div>{name}</div>
      </NameChechkoutItem>
      <PriceChechkoutItem>
        <div>{price + currency}</div>
      </PriceChechkoutItem>
      <RemoveButtonChechkoutItem
        className="remove-button"
        onClick={() => removeFromCartWithDispatch()}
      >
        &#10005;
      </RemoveButtonChechkoutItem>
    </ChechoutItemContainer>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    removeFromCartWithDispatch: (product) => dispatch(removeFromCart(product)),
  };
}
export default connect(null, mapDispatchToProps)(CheckoutItem);
