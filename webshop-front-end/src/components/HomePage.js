import React, { useEffect } from "react";
import { selectFeedProducts } from "../store/products/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products/actions";
import { addToBasket } from "../store/basket/actions";
import ProductCard from "./ProductCard";

export default function HomePage() {
  const products = useSelector(selectFeedProducts);

  console.log("i am the products ..", products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  return (
    <div>
      {products.products.map((prod) => {
        console.log("i am prod.image", prod.image);
        return (
          <div key={prod.id}>
            <ProductCard
              name={prod.name}
              photo={prod.image}
              id={prod.id}
              price={prod.priceInEuroCents}
            />
          </div>
        );
      })}
    </div>
  );
}
