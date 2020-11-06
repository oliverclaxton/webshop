const initialState = {
  loading: false,
  products: [],
};

export default function productFeedSliceReducer(state = initialState, action) {
  // console.log("i got to the reducer");
  switch (action.type) {
    case "feed/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "feed/productsFetched": {
      // console.log("action.payload:", action.payload.data);
      return {
        loading: false,
        products: [...action.payload.data],
      };
    }
    default: {
      return state;
    }
  }
}
