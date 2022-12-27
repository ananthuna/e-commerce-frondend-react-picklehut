import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext, useEffect, useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { UserContext } from '../../../../Context/Context';
import axios from 'axios';
import { baseUrl } from '../../../../url'

function Quantity({ item }) {
    const [numb, setNumb] = useState('')
    const [count, setCount] = useState(0)
    const { setCartitems } = useContext(UserContext)

    useEffect(() => {
        let token = localStorage.getItem("token")
        token = JSON.parse(token)
        const customConfig = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        const data = {
            quantity: numb
        }

        axios.patch(`${baseUrl}/api/cart/cartitems/${item.itemId}`, data, customConfig)
            .then((res) => {
                setCartitems(res.data)
            })
    }, [count])
    return (
        <Box sx={{
            display: 'flex',
            gap: 1,
            justifyContent: 'center',
            mt: '1rem'
        }} key={item.name}>
            <Box sx={{
                border: 1,
                borderRadius: '50%'
            }}>
                <AddIcon onClick={() => {
                    setNumb("+")
                    setCount(prev => prev + 1)
                }} />
            </Box>
            <Box sx={{
                border: 1,
                borderRadius: 1,
                width: '2rem'
            }}>
                <Typography align='center'>{item.quantity}</Typography>
            </Box>
            <Box sx={{
                border: 1,
                borderRadius: '50%'
            }}>
                {numb === 1 ? (<RemoveIcon />) : (<RemoveIcon onClick={() => {
                    setNumb("-")
                    setCount(prev => prev - 1)
                }} />)}
            </Box>
        </Box>
    )
}

export default Quantity