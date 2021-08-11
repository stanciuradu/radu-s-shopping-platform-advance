import React from "react";
// import "../ProductList/ProductItem.scss";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
import {
  ProductItemContainer,
  ProductItemImage,
  ProductItemDetailsContainer,
  ProductItemName,
  ProductItemPrice,
} from "./ProductItemStyles";

function ProductItem(props) {
  const { name, imageUrl, price, currency, addToCartWithDispatch } = props;
  return (
    <ProductItemContainer>
      <ProductItemImage>
        <img src={imageUrl} alt="random" />
      </ProductItemImage>
      <ProductItemDetailsContainer>
        <span className="name">
          <ProductItemName>{name}</ProductItemName>
        </span>
        <span className="price">
          <ProductItemPrice>{price}</ProductItemPrice>
        </span>
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
