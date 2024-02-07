import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useEffect, useState } from "react";
import { getSecretClient } from "../../helpers";

const Payment = () => {
  const publicKey: string = import.meta.env.VITE_PUBLIC_KEY || "";
  const stripe = loadStripe(publicKey);

  const [clientSecret, setClientSecret] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const secretClient = await getSecretClient();
      setClientSecret(secretClient);
    };
    fetchData();
  }, []);
  return (
    <main className=" flex justify-center">
      {publicKey && clientSecret && (
        <Elements stripe={stripe} options={{ clientSecret }}>
          <PaymentForm />
        </Elements>
      )}
    </main>
  );
};

export default Payment;
