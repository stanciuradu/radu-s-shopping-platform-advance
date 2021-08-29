// importam lazy din React deoarece dorim sa importam componentele dinamic in aplicatie
import React, { lazy, Suspense } from "react";
import { GlobalStyle } from "./GlobalStyles/GlobalStyles";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import { auth } from "./apis/firebase";

//IMPORTAREA COMPONENTELOR IN  MOD DINAMIC PRIN React.lazy pentru a se mari performanta
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage"));
const SignInAndSignUp = lazy(() =>
  import("./pages/SignInAndSignUp/SignInAndSignUp")
);
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Category = lazy(() => import("./pages/Category/Category"));
const Page404 = lazy(() => import("./pages/Page404/Page404"));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // initial, userul nu este autentificat in baza de date
      availableUser: null,
    };
  }
  unsubscribeAuth = null;
  // se face reqeust pentru a se prelua datee despre user si a se actualiza state-ul acestuia
  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged((user) => {
      this.setState({ availableUser: user });
      console.log(user);
    });
  }
  // cand componneta s-a demontat, se inchide abonarea la baza de date
  componentWillUnmount() {
    this.unsubscribeAuth();
  }
  render() {
    return (
      <div>
        {/* se aplica stilurile de fisirelul Style-components in intreaga aplicatie */}
        <GlobalStyle />
        {/* pasam la componenta header ca props starea initiala a user-ului */}
        <Header availableUser={this.state.availableUser} />
        {/* componeneta Header se va alfa pe fiecare pagina a aplicatiei */}
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/sign_in" component={SignInAndSignUp} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/category/:categoryName" component={Category} />
          </Suspense>
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
