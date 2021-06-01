import React from 'react';
import {TableRow, TableCell, TableHead} from '@material-ui/core';

function CartTableHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Название</TableCell>
                <TableCell>Стоимость</TableCell>
                <TableCell>Количество</TableCell>
                <TableCell colSpan={2}></TableCell>
            </TableRow>
        </TableHead>
    );
}

export default CartTableHead;