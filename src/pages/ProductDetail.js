import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import ProductService from '../services/productService';
import { Button, Card } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify';

export default function ProductDetail() {

    const dispatch = useDispatch()

    let { id } = useParams()

    const [product, setProduct] = useState({});

    useEffect(() => {
        let productService = new ProductService()
        productService.getProductById(id).then(result => setProduct(result.data.data))
    }, [id])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        toast.success(`${product.productName} sepete eklendi!`)
    }

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
                        <Button basic color='green' onClick={() => handleAddToCart(product)}>
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
