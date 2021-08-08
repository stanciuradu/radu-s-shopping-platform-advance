// este o componenta simpla care reprezinta iconita de cart->svg la care se adauga nr de produse din cart
import React from "react";
import "../../components/CartIcon/CartIcon.scss";
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { connect } from "react-redux";
import { ReactComponent as ShoppingBag } from "../../assets/icons/shopping-bag.svg";

function CartIcon(props) {
  const { toggleCartWithDispatch, numberOfProducts } = props;
  console.log(props);
  return (
    <div className="cart-icon" onClick={toggleCartWithDispatch}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{numberOfProducts}</span>
    </div>
  );
}

// funcia de abonare a componentei la store
function mapStateToProps(state) {
  console.log(state);
  return {
    numberOfProducts: state.products.length,
  };
}

// mapDispatchToProps modifica statusul componentei la click->o modifica din true in false si invers
function mapDispatchToProps(dispatch) {
  return {
    toggleCartWithDispatch: () => dispatch(toggleCartHidden()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
