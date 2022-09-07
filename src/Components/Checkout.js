import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "../Context/StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="flex p-5 max-h-max bg-white">
      <div className="flex flex-col">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/digital/music/merch/India/2017/Weekly/0912/Download_the_apps_music_india_hero.jpg"
          alt=""
          className="w-full mb-5"
        />
        <div>
          <h2 className="text-4xl mr-3 p-3 border-b-2 border-solid border-gray-200">
            Your cart:
          </h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
