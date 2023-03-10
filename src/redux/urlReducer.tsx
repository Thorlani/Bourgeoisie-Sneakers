import { URL } from "./urlType";

const initialState = {
  shopNow: "shopNow",
  offer: "offer",
  top: "top",
  payment: "payment",
};

const urlReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case URL:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default urlReducer;
