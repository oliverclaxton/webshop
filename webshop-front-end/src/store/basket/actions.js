export function addToBasket(id) {
  return {
    type: "ADD_TO_BASKET",
    payload: id,
  };
}
