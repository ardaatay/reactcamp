import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ProductService from '../services/productService';
import { Button, Card } from 'semantic-ui-react'

export default function ProductDetail() {
    let { id } = useParams()

    const [product, setProduct] = useState({});

    useEffect(() => {
        let productService = new ProductService()
        productService.getProductById(id).then(result => setProduct(result.data.data))
    }, [id])

    return (
        <div>
            <Card fluid>
                <Card.Content>
                    <Card.Header>{product.productName}</Card.Header>
                    <Card.Meta>Fiyat= {product.unitPrice} TL</Card.Meta>
                    <Card.Description>
                        {product.quantityPerUnit}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            Sepete Ekle
                        </Button>
                        <Button basic color='red'>
                            Favoriye Ekle
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}
