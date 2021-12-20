import { RequestConstant, ResponseConstant } from "../../module/api/CommanConstant";
import { CartConstants } from "../constants/CartConstants";
import { CartService } from '../services/CartService';

export const CartAction = {
    addLumsumToCart,
};

function addLumsumToCart(url, data) {
    return async dispatch => {
        dispatch(RequestConstant(CartConstants.CART_LUMSUM_REQUEST, data));
        const result = await CartService.addLumsumToCart(url, data);
        dispatch(
            ResponseConstant(
                CartConstants.CART_LUMSUM_SUCCESS,
                CartConstants.CART_LUMSUM_FAILURE,
                result,
            ),
        );
        return result;
    };
}

