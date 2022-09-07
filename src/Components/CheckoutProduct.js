import React from "react";
import { useStateValue } from "../Context/StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="flex mt-5 mb-5">
      <img src={image} alt="" className="w-44 h-44 object-contain" />
      <div className="pl-5">
        <p className="text-base font-extrabold">{title}</p>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div>
          <p className="flex flex-row">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </p>
        </div>
        <button
          className="text-black
         border-2 border-solid border-gray-400 mt-3 p-2 bg-customYellow rounded"
          onClick={removeFromBasket}
        >
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
