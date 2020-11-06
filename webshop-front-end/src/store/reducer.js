import { combineReducers } from "redux";
import productFeedSliceReducer from "./products/reducer";

const reducer = combineReducers({
  products: productFeedSliceReducer,
});

export default reducer;
