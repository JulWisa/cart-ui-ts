import React from 'react';
import Table from '@material-ui/core/Table';

import {CartElement} from '../../../models/cartElement';
import {Product} from '../../../models/product';
import CartTableHead from './CartTableHead';
import CartTableBody from './CartTableBody';

interface CartTableProps {
    cart: CartElement[],
    products: Product[],
    onRemoveCartRow: (id: number) => void,
    onRemoveCartProduct: (id: number) => void
}

function CartTable(props: CartTableProps) {
    return (
        <Table>
            <CartTableHead/>
            <CartTableBody cart={props.cart}
                           products={props.products}
                           onRemoveCartRow={(productId: number) => props.onRemoveCartRow(productId)}
                           onRemoveCartProduct={(productId: number) => props.onRemoveCartProduct(productId)}/>
        </Table>
    );
}

export default CartTable;