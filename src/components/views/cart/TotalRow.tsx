import React, {Component} from 'react';
import {TableCell, Typography, TableRow} from '@material-ui/core';

import {CartElement} from '../../../models/cartElement';
import {Product} from '../../../models/product';
import {RUB_FORMATTER} from '../../../common/numberFormatters';

interface TotalRowProps {
    products: Product[],
    cart: CartElement[]
}

class TotalRow extends Component<TotalRowProps> {
    getPrice(id: number) {
        let result = this.props.products.find(product => product.id === id);
        return result ? result.price : 0;
    }

    render() {
        let total = this.props.cart.reduce((sum, cartElement) => sum + this.getPrice(cartElement.id) * cartElement.count, 0);
        let formattedTotal = RUB_FORMATTER(total);
        return (
            <TableRow>
                <TableCell colSpan={5}>
                    <Typography variant="overline">Всего: {formattedTotal}</Typography>
                </TableCell>
            </TableRow>
        );
    }
}

export default TotalRow;