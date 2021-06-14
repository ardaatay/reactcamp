import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table, Pagination } from 'semantic-ui-react'
import ProductService from "../services/productService"

export default function ProductList() {

    let pageSize = 10
    let totalPages

    const [pagination, setProducts] = useState({ items: [], totalCount: 0 });
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        let productService = new ProductService()
        productService.getProducts(activePage, pageSize).then(result => setProducts(result.data.data))
    }, [activePage, pageSize])

    totalPages = Math.round(pagination.totalCount / pageSize)

    const onChange = (e, pageInfo) => {
        setActivePage(pageInfo.activePage);
    };

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>
                        <Table.HeaderCell>Unit Price</Table.HeaderCell>
                        <Table.HeaderCell>Units In Stock</Table.HeaderCell>
                        <Table.HeaderCell>Quantity Per Unit</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        pagination.items.map(product => (
                            <Table.Row key={product.id}>
                                <Table.Cell><Link to={`/products/${product.id}`}>{product.productName}</Link></Table.Cell>
                                <Table.Cell>{product.unitPrice}</Table.Cell>
                                <Table.Cell>{product.unitsInStock}</Table.Cell>
                                <Table.Cell>{product.quantityPerUnit}</Table.Cell>
                                <Table.Cell>{product.category.categoryName}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
            <Pagination defaultActivePage={1} totalPages={totalPages} onPageChange={onChange} />
        </div>
    )
}
