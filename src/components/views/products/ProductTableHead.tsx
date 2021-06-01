import React from 'react';
import {TableRow, TableCell, TableHead} from '@material-ui/core';

function ProductTableHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Название</TableCell>
                <TableCell>Цена</TableCell>
                <TableCell>Количество</TableCell>
                <TableCell/>
            </TableRow>
        </TableHead>
    );
}

export default ProductTableHead;
