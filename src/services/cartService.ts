import {CartElement} from '../models/cartElement';

export function getCartWithProducts(cart: CartElement[], id: number, count?: number): CartElement[]{
    if (count === undefined) count = 1;
    let oldElement = cart.find(cartElement => cartElement.id === id);
    if (oldElement){
        let productCopy = {...oldElement};
        let i = cart.indexOf(oldElement);
        productCopy.count = oldElement.count + count;
        cart[i] = productCopy;
        return [...cart];
    }
    return [...cart, {id, count}];
}

export function getCartWithoutProduct(cart: CartElement[], id: number): CartElement[]{
    let result = [...cart];
    let product = cart.find(product => product.id === id);
    if (!product) return cart;
    if (product.count === 1){
        return result.filter(prod => prod !== product);
    }
    product.count--;
    return result;
}

export function getCartWithoutProductType(cart: CartElement[], id: number): CartElement[] {
    let result = [...cart];
    return result.filter(product => product.id !== id);
}

