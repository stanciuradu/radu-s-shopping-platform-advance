import React,{useState, useEffect} from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import Page404 from "./pages/Page404/Page404";
import Checkout from "./pages/Checkout/Checkout";
import Category from "./pages/Category/Category";
import { auth } from "./apis/firebase";

function App() {
  const [availableUser, setAvailableUser] = useState(null);
  const unsubscribeAuth = null;
  useEffect(()=>{
    const unsubscribeAuth =auth.onAuthStateChanged((user)=>{
        setAvailableUser(user);
        console.log(user);
    })
  })
  // // constructor() {
  //   super();
  //   this.state = {
  //     // initial, userul nu este autentificat in baza de date
  //     availableUser: null,
  //   };
  // }
  // unsubscribeAuth = null;
  // // se face reqeust pentru a se prelua datee despre user si a se actualiza state-ul acestuia
  // componentDidMount() {
  //   this.unsubscribeAuth = auth.onAuthStateChanged((user) => {
  //     this.setState({ availableUser: user });
  //     console.log(user);
  //   });
  // }
  // // cand componneta s-a demontat, se inchide abonarea la baza de date
  // componentWillUnmount() {
  //   this.unsubscribeAuth();
  // }
    return (
      <div>
        {/* pasam la componenta header ca props starea initiala a user-ului */}
        <Header availableUser={availableUser} />
        {/* componeneta Header se va alfa pe fiecare pagina a aplicatiei */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign_in" component={SignInAndSignUp} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/category/:categoryName" component={Category} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }


export default App;
