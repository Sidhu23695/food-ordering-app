import { UPDATE_CART, EMPTY_CART } from '../Redux/constants';

export const updateCartDetails = (payload) => {
    return {
        type: UPDATE_CART,
        payload,
    };
};
export const emptyCartDetails = (payload) => {
    return {
        type: EMPTY_CART,
        payload,
    };
};
