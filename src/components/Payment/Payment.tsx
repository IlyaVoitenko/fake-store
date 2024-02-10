import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSecretClient } from "../../helpers";
import { productSelector } from "../../store/reducers/products";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const publicKey: string = import.meta.env.VITE_PUBLIC_KEY || "";
  const stripe = loadStripe(publicKey);
  const product = useSelector(productSelector);
  const navigate = useNavigate();

  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const secretClient = await getSecretClient(product, navigate);
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
