import {Product} from '../models/product';
import {CartElement} from '../models/cartElement';

export function getProductsStateWithoutProducts(products: Product[], id: number): Product[]{
    let result = [...products];
    let product = result.find(product => product.id === id);
    if (!product) return products;
    product.count--;
    return result;
}

export function getProductsStateWithProduct(products: Product[], id: number, count?: number): Product[] {
    if (count === undefined) count = 1;
    let result = [...products];
    let product = result.find(product => product.id === id);
    if (!product) return products;
    product.count += count;
    return result;
}

export function getProductsStateWithProducts(products: Product[], cart: CartElement[]): Product[]{
    let result = [...products];
    cart.forEach(cartElement =>{
        let product = result.find(product => cartElement.id === product.id);
        if (product){
            product.count += cartElement.count;
            return product;
        }
    });
    return result;
}
