import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { handleSubmit } from "../../../helpers";
import { CARD_OPTIONS } from "./constants";
import { useState } from "react";

export const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  return (
    <>
      {!success ? (
        <form onSubmit={(e) => handleSubmit(e, elements, stripe, setSuccess)}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>
            You just bought a sweet spatula congrats this is the best decision
            of you're life
          </h2>
        </div>
      )}
    </>
  );
};
export default PaymentForm;
