import React from "react";
import "../ChechoutItem/CheckoutItem.scss";
import { connect } from "react-redux";
import { removeFromCart } from "../../redux/cart/cartActions";
function CheckoutItem(props) {
  const {
    name,
    imageUrl,
    price,
    currency,
    removeFromCartWithDispatch,
  } = props;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="price">{price + currency}</span>
      <div className="remove-button" onClick={()=>removeFromCartWithDispatch()}>&#10005;</div>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    removeFromCartWithDispatch: (product) => dispatch(removeFromCart(product)),
  };
}
export default connect(null, mapDispatchToProps)(CheckoutItem);
