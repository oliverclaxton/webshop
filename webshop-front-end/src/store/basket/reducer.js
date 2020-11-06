export const initialState = {
  basket: [],
};

export default function basketSliceReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
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

//   return { ...state, basket: newBasket };
//     default:
//       return state;
//   }
// }
// turn { ...state, basket: newBasket };
//         de  fault:
//         return state;
//  }
// };

// export default reducer;
// turn { ...state, basket: newBasket };
//         de  fault:
//         return state;
//  }
// };

// export default reducer;
// turn { ...state, basket: newBasket };
//         de  fault:
//         return state;
//  }
// };

// export default reducer;
// turn { ...state, basket: newBasket };
//         de  fault:
//         return state;
//  }
// };

// export default reducer;
// turn { ...state, basket: newBasket };
//         de  fault:
//         return state;
//  }
// };

// export default reducer;
