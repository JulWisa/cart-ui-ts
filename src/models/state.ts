import {Product} from "./product";
import {CartElement} from "./cartElement";

export interface State {
    products: Product[],
    cart: CartElement[]
}
