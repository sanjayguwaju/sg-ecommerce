import React from "react";
import { BrowserRouter } from "react-router-dom";
import Success from "./Success";
import StripeCheckout from "react-stripe-checkout";

const Pay = () => {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name='Super Store'
        image
        billingAddress
        shippingAddress
        description='Your total amount is $20'
        amount={2000}
        token={onToken}
        stripeKey={process.env.STRIPE_KEY}
      >
        <button
          style={{
            border: "none",
            width: "120px",
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            fontSize:"20px",
            fontWeight: "600",
            cursor: "pointer",
            color:"#fff"
          }}
        >
          Pay
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
