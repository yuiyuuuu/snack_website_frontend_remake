import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import React, { useEffect } from "react";

const currency = "USD";
const style = { layout: "vertical" };

const PaypalButtons = ({
  currency,
  showSpinner,
  handleCheckout,
  setStep,
  total,
}) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const amount =
    Math.round(total * 100) % 10 === 0 && total !== 0
      ? Math.round(total * 100) / 100 + "0"
      : Math.round(total * 100) / 100;
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className='spinner' />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then(function () {
            handleCheckout();
            setStep(3);
          });
        }}
      />
    </>
  );
};

export default PaypalButtons;
