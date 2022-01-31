import { BUY_ICECRREAM } from "./iceCreamTypes";

const initialState = {
    numOfIceCreams: 20
}

export const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECRREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state;
    }
}