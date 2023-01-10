import {
  AIRMAX,
  WAFFLES,
  LEGEND,
  CANCELAIRMAX,
  CANCELLEGEND,
  CANCELWAFFLES,
} from "./shoeType";

export const airmaxOrder = (qty = 1) => {
  return {
    type: AIRMAX,
    payload: qty,
  };
};

export const wafflesOrder = (qty = 1) => {
  return {
    type: WAFFLES,
    payload: qty,
  };
};

export const legendOrder = (qty = 1) => {
  return {
    type: LEGEND,
    payload: qty,
  };
};

export const cancelLegendOrder = (qty = 1) => {
  return {
    type: CANCELLEGEND,
    payload: qty,
  };
};
export const cancelWafflesOrder = (qty = 1) => {
  return {
    type: CANCELWAFFLES,
    payload: qty,
  };
};
export const cancelAirmaxOrder = (qty = 1) => {
  return {
    type: CANCELAIRMAX,
    payload: qty,
  };
};
