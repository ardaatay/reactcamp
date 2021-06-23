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
<<<<<<< HEAD
                            <Route exact path="/" component={ProductList} />
                            <Route exact path="/products" component={ProductList} />
                            <Route exact path="/products/:id" component={ProductDetail} />
                            <Route path="/cart" component={CartDetail} />
                            <Route exact path="/product/add" component={ProductAdd} />
=======
                            <Router>
                                <Route exact path="/" component={ProductList} />
                                <Route
                                    exact
                                    path="/products"
                                    component={ProductList}
                                />
                                <Route
                                    path="/products/:id"
                                    component={ProductDetail}
                                />
                                <Route path="/cart" component={CartDetail} />
                            </Router>
>>>>>>> 314711884085d4bb377a3e5183c8628c8430f36d
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
}
