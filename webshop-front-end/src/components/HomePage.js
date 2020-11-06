import React, { useEffect } from "react";
import { selectFeedProducts } from "../store/products/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products/actions";

export default function HomePage() {
  const products = useSelector(selectFeedProducts);

  console.log("i am the products ..", products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  return (
    <div>
      {products.products.map((prod) => (
        <h2 key={prod.id}>{prod.name}</h2>
      ))}
    </div>
  );
}
