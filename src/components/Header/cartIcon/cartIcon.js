import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Badge, IconButton } from '@mui/material';
import { UserContext } from '../../../Context/Context';
import axios from 'axios';
import { baseUrl } from '../../../url'

function cartIcon() {
    const navigate = useNavigate()
    const { cartitems } = useContext(UserContext)
    const [items, setItems] = useState([])
    useEffect(() => {
        let token = localStorage.getItem("token")
        token = JSON.parse(token)
        if (token) {

            const customConfig = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }

            axios.get(`${baseUrl}/api/cart/cartitems`, customConfig)
                .then((res) => {
                    setItems(res.data.items)
                })
        } else {
            navigate('/login')
        }
    }, [cartitems])


    return (
        <Box>
            <IconButton onClick={() => navigate('/cart')}>
                <Badge badgeContent={items && items.length} color='success'>
                    <LocalMallOutlinedIcon sx={{ fontSize: 30 }} color="action" />
                </Badge>
            </IconButton>
        </Box>
    )
}

export default cartIcon