import {
  AIRMAX,
  WAFFLES,
  LEGEND,
  CANCELAIRMAX,
  CANCELLEGEND,
  CANCELWAFFLES,
} from "./shoeType";

const initialState = {
  airmax: {
    itemPrice: 15900,
    quantity: 0,
  },
  waffles: {
    itemPrice: 12000,
    quantity: 0,
  },
  legend: {
    itemPrice: 13500,
    quantity: 0,
  },
};

export const shoeOrders = (state = initialState, action: any) => {
  switch (action.type) {
    case AIRMAX:
      return {
        ...state,
        airmax: {
          ...state.airmax,
          quantity: state.airmax.quantity + action.payload,
        },
      };
    case WAFFLES:
      return {
        ...state,
        waffles: {
          ...state.waffles,
          quantity: state.waffles.quantity + action.payload,
        },
      };
    case LEGEND:
      return {
        ...state,
        legend: {
          ...state.legend,
          quantity: state.legend.quantity + action.payload,
        },
      };
    case CANCELAIRMAX:
      return {
        ...state,
        airmax: {
          ...state.airmax,
          quantity: state.airmax.quantity - action.payload,
        },
      };
    case CANCELWAFFLES:
      return {
        ...state,
        waffles: {
          ...state.waffles,
          quantity: state.waffles.quantity - action.payload,
        },
      };
    case CANCELLEGEND:
      return {
        ...state,
        legend: {
          ...state.legend,
          quantity: state.legend.quantity - action.payload,
        },
      };
    default:
      return state;
  }
};
