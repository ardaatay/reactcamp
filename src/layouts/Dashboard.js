import React from "react";
import { Container, Grid } from "semantic-ui-react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";

export default function Dashboard() {
  return (
    <div>
      <Container className="main">
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Categories />
            </Grid.Column>
            <Grid.Column width={12}>
              <ProductList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
