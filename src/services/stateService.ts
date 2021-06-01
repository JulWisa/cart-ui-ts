import {State} from '../models/state';
import * as productsService from './productsService';
import * as cartService from './cartService';

export function initiateState(): State{
    return {
        products: [
            {id: 0, name: "Яблоко", price: 86, count: 0},
            {id: 1, name: "Томат", price: 109, count: 4},
            {id: 2, name: "Морковь", price: 39, count: 7},
            {id: 3, name: "Апельсин", price: 73, count: 68},
            {id: 4, name: "Лимон", price: 52, count: 33}
        ],
        cart: []
    }
}

export function clearCart(state: State) : State{
    let products = productsService.getProductsStateWithProducts(state.products, state.cart);
    return {cart: [], products};
}

export function addProductToCart(state: State, productId: number): State{
    let product = state.products.find(product => product.id === productId);
    if(product && product.count <= 0) return state;

    let cart = cartService.getCartWithProducts(state.cart, productId);
    let products = productsService.getProductsStateWithoutProducts(state.products, productId);
    return {cart, products};
}

export function removeProductTypeFromCart(state: State, productId: number): State{
    let cartElement = state.cart.find(prod => prod.id === productId);
    if (!cartElement) return state;

    let cart = cartService.getCartWithoutProductType(state.cart, productId);
    let remaining = cartElement.count;
    let products = productsService.getProductsStateWithProduct(state.products, productId, remaining);
    return {cart, products};
}

export function removeProductFromCart(state: State, productId: number): State{
    let cartElement = state.cart.find(cartElement => cartElement.id === productId);
    if (!cartElement) return state;
    if (cartElement.count === 1) return removeProductTypeFromCart(state, productId);

    let cart = cartService.getCartWithoutProduct(state.cart, productId);
    let products = productsService.getProductsStateWithProduct(state.products, productId);
    return {cart, products};
}
