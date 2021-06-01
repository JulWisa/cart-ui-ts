import React from 'react';

import {Product} from '../../../models/product';
import ProductTable from './ProductTable';
import ButtonLink from '../../ButtonLink';

interface ProductsProps {
    products: Product[],
    onAddProduct: (id: number) => void
}

function Products(props: ProductsProps) {
    return (
        <div>
            <ProductTable products={props.products}
                          onAddProduct={(productId: number) => props.onAddProduct(productId)}/>
            <ButtonLink className="cartButton" to="/cart"> Корзина </ButtonLink>
        </div>
    );
}

export default Products;
