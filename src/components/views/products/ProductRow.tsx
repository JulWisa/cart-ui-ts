import React from 'react';
import {TableCell, Button, TableRow} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import {Product} from '../../../models/product';
import {RUB_FORMATTER} from '../../../common/numberFormatters';

interface ProductRowProps {
    product: Product,
    onAddProduct: (id: number) => void
}

function ProductRow(props: ProductRowProps) {
    let product = props.product;
    return (
        <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{RUB_FORMATTER(product.price)}</TableCell>
            <TableCell>{product.count}</TableCell>
            <TableCell>
                <Button onClick={() => props.onAddProduct(props.product.id)}>
                    <AddIcon/>
                </Button>
            </TableCell>
        </TableRow>
    );
}

export default ProductRow;
