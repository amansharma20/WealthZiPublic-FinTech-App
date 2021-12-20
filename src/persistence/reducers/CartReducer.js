/* eslint-disable prettier/prettier */
import { CartConstants } from '../constants/CartConstants';

const initialState = {
  status: '',
  data: {
    cart:{}
  },
  error: {},
};

export function CartReducer(state = initialState, action) {
  switch (action.type) {

    case CartConstants.CART_LUMSUM_REQUEST:
        return {
            status: CartConstants.CART_LUMSUM_REQUEST,
            data: { ...state.data },
            error: {},
        };
    case CartConstants.CART_LUMSUM_SUCCESS:
        return {
            status: CartConstants.CART_LUMSUM_SUCCESS,
            data: { ...state.data, ...{ cart: action.data.data } },
            error: {},
        };
    case CartConstants.CART_LUMSUM_FAILURE:
        return {
            status: CartConstants.CART_LUMSUM_FAILURE,
            data: { ...state.data, cart: {} },
            error: action.data
        };

    default:
      return state;
  }
}
