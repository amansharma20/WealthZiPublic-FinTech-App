import {api} from '../../module/api/SecureAPI';

export const CartService = {
    addLumsumToCart,
    addSIPToCart
};

async function addLumsumToCart(url, data) {
    return await api.post(url, data);
}

async function addSIPToCart(url, data) {
    return await api.post(url, data);
}

