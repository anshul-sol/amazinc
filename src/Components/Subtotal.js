import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../Context/StateProvider";
import { getBasketTotal } from "../Context/Reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="flex flex-col justify-between w-80 h-34 p-5 m-5 border border-solid border-gray-300 rounded bg-gray-200">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.lenth} items): <strong>{value}</strong>
            </p>
            <small className="flex items-center">
              <input className="mr-1" type="checkbox" /> This order contains a
              gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="text-black border-2 border-solid mt-3 p-2 border-gray-400 bg-customYellow rounded">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
