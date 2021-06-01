import React, {Component} from 'react';
import {TableBody, TableRow, TableCell} from '@material-ui/core';

import {Product} from '../../../models/product';
import {CartElement} from '../../../models/cartElement';
import TotalRow from './TotalRow';
import CartRow from './CartRow';

interface CartTableBodyProps {
    products: Product[],
    cart: CartElement[],
    onRemoveCartRow: (id: number) => void,
    onRemoveCartProduct: (id: number) => void
}

class CartTableBody extends Component<CartTableBodyProps> {
    getProductData(id: number) {
        let result = this.props.products.find(product => product.id === id);
        if (!result) return {name: "", price: 0};
        return {name: result.name, price: result.price}
    }

    getBody() {
        if (this.props.cart.length > 0)
            return this.props.cart.map(cartElement => {
                let productData = this.getProductData(cartElement.id);
                let cartProduct = Object.assign(productData, cartElement);
                return <CartRow
                    product={cartProduct}
                    onRemoveCartRow={productId => this.props.onRemoveCartRow(productId)}
                    onRemoveCartProduct={productId => this.props.onRemoveCartProduct(productId)}
                    key={cartElement.id}/>
            });
        return (
            <TableRow>
                <TableCell className="emptyCart" colSpan={5}>
                    Корзина пуста
                </TableCell>
            </TableRow>);
    }

    render() {
        return (
            <TableBody>
                {this.getBody()}
                <TotalRow cart={this.props.cart} products={this.props.products}/>
            </TableBody>
        );
    }
}

export default CartTableBody;