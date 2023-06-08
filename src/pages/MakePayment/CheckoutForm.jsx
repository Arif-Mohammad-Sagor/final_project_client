import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "../MakePayment/styles/common.css";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const CheckoutForm = ({ data, price }) => {
  // console.log(data, price);
  const { user } = useAuth();
  const [clientSecrect, setClientSecret] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post(`/create-payment-intent`, { price }).then((response) => {
        // console.log(response.data?.clientSecret);
        setClientSecret(response.data?.clientSecret);
      });
    }
  }, [price]);
  console.log(clientSecrect);
  // console.log(typeof clientSecrect,clientSecrect)

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });



    if (error) {
      console.log("[error]", error);
    } else {
        // console.log("[PaymentMethod]", paymentMethod);
    }
   

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecrect, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("paymentError", confirmError);
    }
       console.log(paymentIntent)
    if (paymentIntent.status === "succeeded") {
      setTransectionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        transectionId: paymentIntent.id,
        price,
        quantity: data?.length,
        date: new Date(),
        status: "due",
        selectedClassItemsId: data?.map((item) => item._id),
        selectedClassItemsNames: data?.map((item) => item.Name),
        haveInAllClassItemsId: data?.map((item) => item.ClassItemId),
      };
      axiosSecure.post("/makepayment", payment).then((res) => {
        console.log(res.data);
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" className="btn btn-primary" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
