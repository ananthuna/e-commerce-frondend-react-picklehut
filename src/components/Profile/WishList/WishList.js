import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ProductDetails from '../../Cart/List/ProductDetails/ProductDetails'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function WishList({ items }) {
    useEffect(() => {
      console.log(items);
    }, [])
    


    return (
        <Box sx={{
            bgcolor: 'white',
            width: '65rem',
            p: '2rem',
            borderRadius: '1rem',
            boxShadow: "1px 1px 6px 0px grey"

        }}>
            <Typography><b>My WishList</b></Typography>
            {items.map((item, index) =>
                <Box sx={{
                    border: 1,
                    borderColor: 'lightgrey',
                    width: '65rem',
                    display: 'flex',
                    ml: '-2rem'
                }} key={index}>
                    <Box sx={{
                        mt: '1rem',
                        mb: '1rem'
                    }}>
                        <img src={'https://rukminim1.flixcart.com/image/416/416/l15bxjk0/pickle-murabba/5/g/u/200-homemade-onion-pickel-200g-1-glass-bottle-pickle-arkos-original-imagcsc8mebwebca.jpeg?q=70'} alt='img' width={150} height={100}></img>
                    </Box>
                    <Box sx={{ ml: '5rem' }}>
                        <ProductDetails item={item} />
                    </Box>
                    <Box sx={{
                        ml: '32rem',
                        mt: '3rem'
                    }}>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default WishList
