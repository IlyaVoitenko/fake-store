import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { handleSubmit } from "../../../helpers";
import { useState } from "react";
import { MessagePaymentType } from "../../../interfaces";

export const PaymentForm = () => {
  const [message, setMessage] = useState<MessagePaymentType>("");
  const [isProcessing, setIsProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  return (
    <>
      <form
        onSubmit={(e) =>
          handleSubmit(e, elements, stripe, setIsProcessing, setMessage)
        }
        className={`flex flex-col`}
      >
        <PaymentElement />
        <button disabled={isProcessing}>
          <span>{isProcessing ? "Processing..." : "Pay now"}</span>
        </button>
        {message && typeof message === "string" && <div>{message}</div>}
      </form>
    </>
  );
};
export default PaymentForm;
