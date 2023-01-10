import { AIRMAX, WAFFLES, LEGEND } from "./shoeType" 

export const airmaxOrder = (qty = 1) => {
    return {
        type: AIRMAX,
        payload: qty
    }
}

export const wafflesOrder = (qty = 1) => {
    return {
        type: WAFFLES,
        payload: qty
    }
}

export const legendOrder = (qty = 1) => {
    return {
        type: LEGEND,
        payload: qty
    }
}