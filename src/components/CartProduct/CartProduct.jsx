// ->este o componenta simpla care reprezinta fiecare produs care are anumite prosp-uri
import React from "react";
import "../../components/CartProduct/CartProduct.scss";

function CartProduct(props) {
  const { imageUrl, price, name, currency } = props;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="random" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <span className="currency">{currency}</span>
      </div>
    </div>
  );
}

export default CartProduct;
