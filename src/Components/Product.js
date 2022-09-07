import React from "react";
import { useStateValue } from "../Context/StateProvider";

function Product({ id, title, price, rating, image }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="flex flex-col items-center justify-end m-2 p-5 max-h-product min-w-min-content bg-gray-200">
      <div className="h-24 mb-4">
        <p>{title}</p>
        <p className="mt-3">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt=""
        className="w-full max-h-24 mt-5 mb-4 object-contain"
      />
      <button
        onClick={addToBasket}
        className="text-black border-1 border-solid border-gray-400 mt-2 p-2 bg-customYellow rounded"
      >
        Add to Cart!
      </button>
    </div>
  );
}

export default Product;
