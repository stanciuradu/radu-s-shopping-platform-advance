import React from "react";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";
import {
  CollectionItemContainer,
  ImageCollectionItem,
  CollectionFooterContainer,
  CollectionItemName,
  CollectionItemPrice,
} from "./CollectionItemStyles";

function CollectionItem(props) {
  const { name, price, imageUrl, currency, addToCartWithDispatch } = props;
  console.log(props);
  return (
    <CollectionItemContainer>
      <ImageCollectionItem style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooterContainer>
        <CollectionItemName>
          <div>{name}</div>
        </CollectionItemName>
        <CollectionItemPrice>
          <div>{price}</div>
        </CollectionItemPrice>
        <span className="currency">{currency}</span>
      </CollectionFooterContainer>
      <ButtonSubmit
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
    </CollectionItemContainer>
  );
}
// ->utilizez mapDispatchToProps pentru a modifica state-ul store-ului->la click pe iconita valoarea lui hidden se schimba din true in false si invers
function mapDispatchToProps(dispatch) {
  return {
    addToCartWithDispatch: (product) => dispatch(addToCart(product)),
  };
}
export default connect(null, mapDispatchToProps)(CollectionItem);
