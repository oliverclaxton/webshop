export const initialState = {
  basket: [],
};

export default function basketSliceReducer(state = initialState, action) {
  console.log("i am the action", action);
  switch (action.type) {
    case "ADD_TO_BASKET": {
      //logic for adding item to basket
      console.log("state:", state);
      console.log("action.payload:", action.payload);
      // 1. find out if the product is already in the basket
      if (state.basket.find((cartItem) => cartItem.id === action.payload)) {
        const newBasket = state.basket.map((cartItem) => {
          if (cartItem.id === action.payload) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          }
          return { ...cartItem };
        });
        return { basket: newBasket };
      }
      const newItem = { id: action.payload, quantity: 1 };
      return { basket: [...state.basket, newItem] };
    }

    // case "REMOVE_FROM_BASKET":
    //   //logic for removing item from basket
    //   let newBasket = [...state.basket];

    //   const index = state.basket.findIndex(
    //     (basketItems) => basketItems.id === action.id
    //   );

    //   if (index >= 0) {
    //     //if item exisits then remove it
    //     newBasket.splice(index, 1);
    //   } else {
    //     console.warn(
    //       "cant remove product (id: ${action.id}) as its not in basket"
    //     );
    //   }

    // return { ...state, basket: newBasket };
    default:
      return state;
  }
}
