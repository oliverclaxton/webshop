import React, { useEffect } from "react";
import { selectFeedProducts } from "../store/products/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products/actions";
import { addToBasket } from "../store/basket/actions";

export default function HomePage() {
  const products = useSelector(selectFeedProducts);

  console.log("i am the products ..", products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  function buttonClickedHandler(id) {
    dispatch(addToBasket(id));
  }

  return (
    <div>
      {products.products.map((prod) => (
        <div>
          <h2 key={prod.id}>{prod.name}</h2>
          <button onClick={() => buttonClickedHandler(prod.id)}>
            Add to basket{" "}
          </button>
        </div>
      ))}
    </div>
  );
}
