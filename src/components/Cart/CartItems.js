import { Box } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import List from './List/List'
import Address from './Address/Address'
import TotalPrice from './TotalPrice/TotalPrice'
import PlaceOrder from './PlaceOrder/PlaceOrder'
import axios from 'axios'
import { baseUrl } from '../../url'
import { UserContext } from '../../Context/Context'

function CartItems() {
    const [cart, setCart] = React.useState({})
    const { cartitems, setCartitems } = useContext(UserContext)
    const [items, setItems] = React.useState([])
    useEffect(() => {
        let token = localStorage.getItem("token")
        token = JSON.parse(token)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        axios.get(`${baseUrl}/api/cart/cartitems`, customConfig)
            .then((res) => {
                setCart(res.data)
                setCartitems(res.data)
                setItems(res.data.items)
            })
    }, [cartitems])


    return (
        <Box sx={{
            display: 'flex',
            bgcolor: '#F8F8F8'
        }}>
            <Box sx={{
                mt: '5.6rem',
                width: '60%'
            }}>
                <Address />

                {cart && <List items={items} />}

                <PlaceOrder />
            </Box>
            <Box sx={{
                width: '40%'
            }}>
                {cart && <TotalPrice cart={cart} items={items} />}
            </Box>
        </Box>
    )
}

export default CartItems