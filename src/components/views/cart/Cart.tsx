import React from 'react';
import {Button, Typography} from '@material-ui/core';

import {CartElement} from '../../../models/cartElement';
import {Product} from '../../../models/product';
import CartTable from './CartTable';
import ButtonLink from '../../ButtonLink';

interface CartProps {
    cart: CartElement[],
    products: Product[],
    onRemoveCartRow: (id: number) => void,
    onRemoveCartProduct: (id: number) => void,
    onClearCart: () => void
}

function Cart(props: CartProps) {
    return (
        <div>
            <Typography variant="h5" className="headline">Корзина</Typography>
            <CartTable cart={props.cart}
                       products={props.products}
                       onRemoveCartRow={(productId: number) => props.onRemoveCartRow(productId)}
                       onRemoveCartProduct={(productId: number) => props.onRemoveCartProduct(productId)}/>

            <ButtonLink className="cartButton" to="/">
                Перейти в список товаров
            </ButtonLink>


            <Button onClick={props.onClearCart}>
                Очистить корзину
            </Button>
        </div>
    );
}

export default Cart;