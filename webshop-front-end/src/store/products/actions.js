import axios from "axios";

export const API_URL = `http://localhost:4000`;

export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function productsFetched(results) {
  return {
    type: "feed/productsFetched",
    payload: results,
  };
}

export async function fetchProducts(dispatch, getState) {
  dispatch(startLoading());
  // console.log("i got to the fecth products thunk");

  const results = await axios.get(`${API_URL}/products`);

  //console.log("i am results ", results);

  dispatch(productsFetched(results));
}
