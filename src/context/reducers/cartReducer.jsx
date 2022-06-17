export const initialState = { orders: [], checkedState: [] };

export const UPDATE_ORDERS = "orders"
export const CLEAR_ORDERS = "clearOrders"

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ORDERS:

            return {
                ...state, ...action.payload
            }
        case CLEAR_ORDERS:

            return {
                ...state, orders: []
            }

        default:
            break;
    }

}