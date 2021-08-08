import React from "react";
import "../CollectionItem/CollectionItem.scss";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";

function CollectionItem(props) {
  const { name, price, imageUrl, currency, addToCartWithDispatch } = props;
  console.log(props);
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <span className="currency">{currency}</span>
      </div>
      <ButtonSubmit
        className="add-to-cart"
        onClick={() =>
          addToCartWithDispatch({
            name,
            price,
            imageUrl,
            currency,
          })
        }
      >
        Add to cart
      </ButtonSubmit>
    </div>
  );
}
// ->utilizez mapDispatchToProps pentru a modifica state-ul store-ului->la click pe iconita valoarea lui hidden se schimba din true in false si invers
function mapDispatchToProps(dispatch) {
  return {
    addToCartWithDispatch: (product) => dispatch(addToCart(product)),
  };
}
export default connect(null, mapDispatchToProps)(CollectionItem);
