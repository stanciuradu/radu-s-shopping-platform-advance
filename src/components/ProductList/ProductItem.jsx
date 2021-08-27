import React from "react";
// import "../ProductList/ProductItem.scss";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
import {
  ProductItemContainer,
  ProductItemDetailsContainer,
  ProductItemName,
  ProductItemPrice,
} from "./ProductItemStyles";

function ProductItem(props) {
  const { name, imageUrl, price, currency, addToCartWithDispatch } = props;
  return (
    <ProductItemContainer>
      <img src={imageUrl} alt="random" className="image" />
      <ProductItemDetailsContainer>
        <ProductItemName>
          <div>{name}</div>
        </ProductItemName>
        <ProductItemPrice>
          <div>{price}</div>
        </ProductItemPrice>
        <span className="currency">{currency}</span>
      </ProductItemDetailsContainer>
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
    </ProductItemContainer>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    addToCartWithDispatch: (product) => dispatch(addToCart(product)),
  };
}

export default connect(null, mapDispatchToProps)(ProductItem);
