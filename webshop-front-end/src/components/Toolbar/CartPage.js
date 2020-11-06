import React from "react";
import { selectBasket } from "../../store/basket/selectors";
import { selectFeedProducts } from "../../store/products/selectors";

import { useSelector } from "react-redux";

export default function CartPage() {
  const basket = useSelector(selectBasket).basket;
  const products = useSelector(selectFeedProducts).products;

  //map over basket :
  //return product.find(basket.id)

  const matchedItems = basket.map((item) => {
    //console.log("item:", item.id);
    return products.find((myProduct) => myProduct.id === item.id);
  });

  // console.log("i am the matched irtems", matchedItems);

  // console.log("i am the basket details", basket);
  // console.log("i am the product details", products);

  return (
    <div>
      <div>
        {matchedItems.map((item) => {
          console.log("i am the item!!", item);
          return (
            <div style={{ display: "inline-block", alignItems: "center" }}>
              <div
                className="card"
                style={{ width: "20rem", margin: "20px 20px" }}
              >
                <div>
                  <h1>{item.name}</h1>
                </div>
                <div>
                  <img className="card-img-top" src={item.image} alt=" agent" />
                </div>
                <div className="card-text">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
