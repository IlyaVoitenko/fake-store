import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const Payment = () => {
  const publicKey: string = import.meta.env.VITE_PUBLIC_KEY || "";
  const stripe = loadStripe(publicKey);
  return (
    <Elements stripe={stripe}>
      <PaymentForm />
    </Elements>
  );
};

export default Payment;
