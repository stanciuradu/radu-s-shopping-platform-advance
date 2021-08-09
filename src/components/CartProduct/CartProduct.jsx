// ->este o componenta simpla care reprezinta fiecare produs care are anumite prosp-uri
import React from "react";
// import "../../components/CartProduct/CartProduct.scss";
import {
  CartItemContainer,
  Image,
  ItemDetailsContainer,
  ItemDetailsName,
} from "./CartProductStyles";

function CartProduct(props) {
  const { imageUrl, price, name, currency } = props;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt="random" />
      <ItemDetailsContainer>
        <ItemDetailsName>
          <div>{name}</div>
        </ItemDetailsName>
        <span className="price">{price}</span>
        <span className="currency">{currency}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}

export default CartProduct;
