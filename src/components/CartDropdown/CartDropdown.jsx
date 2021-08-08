import React from "react";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import "../../components/CartDropdown/CartDropdown.scss";
import CartProduct from "../CartProduct/CartProduct";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {toggleCartHidden} from '../../redux/cart/cartActions';

function CartDropdown(props) {
  console.log(props);
  const { productsItem, dispatch } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
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
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Link to="/checkout" className='link' >
        {/* la click pe buton, in pagina de Checkout va disparea componenta dropDown->se va schimba strea din true in false */}
        <ButtonSubmit onClick={()=>{dispatch(toggleCartHidden())}}>GO TO CHECKOUT</ButtonSubmit>
      </Link>
    </div>
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
