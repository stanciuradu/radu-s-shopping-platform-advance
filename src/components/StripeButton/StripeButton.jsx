import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton(props) {
  const { price } = props;
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IxGvaFUW1mdMZlLGIMJe58paJsoAelt8lhucSRlGv9Y1jVHmaaJ72Mu3egQiQeWDkxVPpHG6cQYbLePLoeMKOxA00rT9KEqVM";
  function onToken(token) {
    console.log(token);
    alert("Payment Succesful");
  }
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Radu's Clothes"
        billingAddress
        shippingAddress
        image="https://i.imgur.com/L6PvIUr.png"
        description={`Yout total is €${price}`}
        amount={priceForStripe}
        panelLabel="Pay now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
}

export default StripeButton;
