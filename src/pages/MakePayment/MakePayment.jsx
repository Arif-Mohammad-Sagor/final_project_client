import React from 'react'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
import useClassesLoader from '../hooks/useClassesLoader';

const MakePayment = () => {
    const [data] = useClassesLoader();
    const totalPrice = data?.reduce((sum, item) => sum + item.Price, 0);

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_KEY);

  return (
    <Elements stripe={stripePromise}>
          <CheckoutForm data={data} price={ totalPrice} />
    </Elements>
  );
}

export default MakePayment