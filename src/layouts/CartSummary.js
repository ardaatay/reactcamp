import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Image, Label, Menu } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export default function CartSummary() {

    const { cartItems } = useSelector(state => state.cart)

    return (
        <div>
            <Menu.Item>
                <Image avatar src="https://cdn4.iconfinder.com/data/icons/business-and-finance-colorful-free-hand-drawn-set/100/shopping_cart-256.png" />
                <Dropdown pointing="top" text='Sepetiniz'>
                    <Dropdown.Menu>
                        {
                            cartItems.map((cartItem) => (
                                <Dropdown.Item key={cartItem.product.id}>
                                    {cartItem.product.productName}  
                                    <Label color='red' circular>
                                        {cartItem.quantity}
                                    </Label>
                                </Dropdown.Item>
                            ))
                        }
                        <Dropdown.Divider />
                        <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
