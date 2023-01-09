// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counter";
import { legacy_createStore as createStore} from 'redux'
import urlReducer from "./urlReducer";

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

const store = createStore(urlReducer)

export default store