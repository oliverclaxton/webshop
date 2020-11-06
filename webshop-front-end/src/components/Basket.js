import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

import { selectBasket } from "../store/basket/selectors";
import { useSelector } from "react-redux";

let basketTotal = { quantity: 0 };
const Basket = () => {
  const basket = useSelector(selectBasket);
  if (basket.basket.length) {
    basketTotal = basket.basket.reduce((a, b) => {
      return { quantity: a.quantity + b.quantity };
    });
  }

  return (
    <div>
      <Link to="/mycart">
        <ShoppingCartIcon />
      </Link>
      <span>{basketTotal.quantity}</span>
    </div>
  );
};

export default Basket;
