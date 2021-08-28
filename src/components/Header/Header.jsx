// componenta de Header este una simpla de tip Function
import React from "react";
import Logo from "../../assets/images/logo.png";
import { auth } from "../../apis/firebase";
import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
// conectez componenta la redux prin connect
import { connect } from "react-redux";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./HeaderStyles";

function Header(props) {
  const { availableUser, hidden } = props;
  console.log(props);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <img src={Logo} alt="random" className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          <h4>SHOP PAGE</h4>
        </OptionLink>
        <OptionLink to="/shop" className="option">
          <h4>CONTACT</h4>
        </OptionLink>
        <OptionLink to="/sign_in" className="option">
          <h4>SIGN IN</h4>
        </OptionLink>

        {/* daca user0ul este autentificat se afiseaza SignOut, altfel se redirectioneaza user-ul catre pagina de SignIn */}
        {availableUser ? (
          <OptionLink onClick={() => auth.signOut()}>
            <h4>SIGN OUT</h4>
            <p>{availableUser.displayName}</p>
            <p>{availableUser.email}</p>
          </OptionLink>
        ) : (
          <OptionLink to="/sign_in"></OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {/* imlementam un operator ternar */}
      {/* daca componenta este ascunsa, nu se afiseaza nimic, altfel, se afiseaza componenta */}
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
}
// abonez componenta Header  la store
function mapStateToProps(state) {
  console.log(state);
  return {
    hidden: state.hidden,
  };
}
export default connect(mapStateToProps)(Header);
