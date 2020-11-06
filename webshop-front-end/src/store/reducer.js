import { combineReducers } from "redux";
import basketSliceReducer from "./basket/reducer";
import productFeedSliceReducer from "./products/reducer";

const reducer = combineReducers({
  products: productFeedSliceReducer,
  basket: basketSliceReducer,
});

export default reducer;
