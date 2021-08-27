import React from "react";
import "../ProductList/ProductItem.scss";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";

function ProductItem(props) {
  const { name, imageUrl, price, currency, addToCartWithDispatch } = props;
  return (
    <div className="product-item">
      <img src={imageUrl} alt="random" className="image" />
      <div className="product-item-details">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <span className="currency">{currency}</span>
      </div>
      <ButtonSubmit
        onClick={() =>
          addToCartWithDispatch({
            name,
            imageUrl,
            price,
            currency,
          })
        }
      >
        Add to Cart
      </ButtonSubmit>
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    addToCartWithDispatch: (product) => dispatch(addToCart(product)),
  };
}

export default connect(null, mapDispatchToProps)(ProductItem);
