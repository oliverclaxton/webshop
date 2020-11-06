import Axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../store/products/actions";

export default function ProductPage(productId) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async (productId) => {
      try {
        const fetchedProduct = await Axios.get(
          `${API_URL}/products/${productId}`
        );
        return fetchedProduct;
      } catch (e) {
        console.log("e:", e);
        return e;
      }
    };
    setProduct(fetchProduct(productId));
  }, []);

  console.log("product:", product);
  return <div>product page</div>;
}
