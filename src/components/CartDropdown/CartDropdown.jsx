import React from "react";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
// import "../../components/CartDropdown/CartDropdown.scss";
import CartProduct from "../CartProduct/CartProduct";
import { connect } from "react-redux";
import {toggleCartHidden} from '../../redux/cart/cartActions';
import { CartDropdownContainer, CartItemsContainer, EmptyMessage, LinkDropdown } from "./CartDropdownStyles";

function CartDropdown(props) {
  console.log(props);
  const { productsItem, dispatch } = props;
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {/* daca sunt produse in cart, ele se vor afisa, randa in componenta dropDown, altfel se va afisa mesajul->Cartul tau este gol */}
        {productsItem.length ? (
          productsItem.map((item,index) => {
            return (
              <CartProduct
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                currency={item.currency}
                key={index}
              />
            );
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <LinkDropdown to="/checkout" >
        {/* la click pe buton, in pagina de Checkout va disparea componenta dropDown->se va schimba strea din true in false */}
        <ButtonSubmit onClick={()=>{dispatch(toggleCartHidden())}}>GO TO CHECKOUT</ButtonSubmit>
      </LinkDropdown>
    </CartDropdownContainer>
  );
}
function mapStateToProps(state) {
  console.log(state);
  return {
    // productsItem-> sunt produsele din cart
    productsItem: state.products,
  };
}

export default connect(mapStateToProps)(CartDropdown);
