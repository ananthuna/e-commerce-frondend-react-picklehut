import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Button from '@mui/material/Button';
import React, { useContext } from 'react';
import axios from 'axios';
import { baseUrl } from '../../../../url'
import { UserContext } from '../../../../Context/Context';

function Delivery({ item }) {

    const { setCartitems } = useContext(UserContext)

    const handleRemove = () => {
        let token = localStorage.getItem("token")
        token = JSON.parse(token)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        axios.delete(`${baseUrl}/api/cart/cartitems/?itemId=${item.itemId}`, customConfig)
            .then((res) => {
                setCartitems(res.data)
            })

    }
    return (
        <Box sx={{ mr: '2rem' }}>
            <Box sx={{
                display: 'flex'
            }}>
                <Typography>Delivery by Mon Dec 5 |</Typography>
                <Typography sx={{ color: 'green' }}>Free</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                mt: '3rem',
            }}>
                {/* <Button variant="text">Add to wishlist</Button> */}
                <Button variant="text" onClick={handleRemove}>REMOVE</Button>
            </Box>
        </Box>
    )
}

export default Delivery