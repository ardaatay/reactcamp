import React from 'react'
import { Route } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { Container, Grid } from 'semantic-ui-react'
import CartDetail from '../pages/CartDetail'
import ProductAdd from '../pages/ProductAdd'
import ProductDetail from '../pages/ProductDetail'
import ProductList from '../pages/ProductList'
import Categories from './Categories'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right" />
            <Container className="main">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Categories />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Route exact path="/" component={ProductList} />
                            <Route exact path="/products" component={ProductList} />
                            <Route exact path="/products/:id" component={ProductDetail} />
                            <Route path="/cart" component={CartDetail} />
                            <Route exact path="/product/add" component={ProductAdd} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}
