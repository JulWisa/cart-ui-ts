import React from 'react';
import {TableRow, TableCell, Button} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';

import {Product} from '../../../models/product'
import {RUB_FORMATTER} from '../../../common/numberFormatters';

interface CartRowProps {
    product: Product,
    onRemoveCartProduct: (id: number) => void,
    onRemoveCartRow: (id: number) => void
}

function CartRow(props: CartRowProps) {
    let product = props.product;
    let price = RUB_FORMATTER(product.price * product.count);
    return (
        <TableRow>
            <TableCell>{product.name}</TableCell>
            <TableCell>{price}</TableCell>
            <TableCell>{product.count}</TableCell>
            <TableCell>
                <Button onClick={() => props.onRemoveCartProduct(product.id)}>
                    <RemoveIcon/>
                </Button>
            </TableCell>
            <TableCell>
                <Button onClick={() => props.onRemoveCartRow(product.id)}>
                    Удалить все
                </Button>
            </TableCell>
        </TableRow>);
}

export default CartRow;