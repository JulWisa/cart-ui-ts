import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {State} from './models/state';
import Products from './components/views/products/Products';
import Layout from './components/layouts/Layout';
import * as stateService from './services/stateService';
import Cart from "./components/views/cart/Cart";

class App extends Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = stateService.initiateState();
    }

    onClearCart(): void {
        this.setState(stateService.clearCart(this.state));
    }

    onAddProduct(productId: number): void {
        this.setState(stateService.addProductToCart(this.state, productId));
    };

    onRemoveCartRow(productId: number): void {
        this.setState(stateService.removeProductTypeFromCart(this.state, productId));
    }

    onRemoveCartProduct(productId: number): void {
        this.setState(stateService.removeProductFromCart(this.state, productId));
    }

    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route exact path="/"
                                   render={() =>
                                       <Products products={this.state.products}
                                                 onAddProduct={(productId: number) => this.onAddProduct(productId)}/>}
                            />
                            <Route exact path="/cart"
                                   render={() =>
                                       <Cart cart={this.state.cart}
                                             products={this.state.products}
                                             onClearCart={() => this.onClearCart()}
                                             onRemoveCartRow={(productId: number) => this.onRemoveCartRow(productId)}
                                             onRemoveCartProduct={(productId: number) => this.onRemoveCartProduct(productId)}/>}
                            />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
