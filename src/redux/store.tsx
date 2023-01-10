// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counter";
import { legacy_createStore as createStore, combineReducers } from "redux";
import urlReducer from "./urlReducer";
import { shoeOrders } from "./shoeReducer";

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

const rootReducer = combineReducers({
  url: urlReducer,
  shoes: shoeOrders,
});

const store = createStore(rootReducer);

export default store;
