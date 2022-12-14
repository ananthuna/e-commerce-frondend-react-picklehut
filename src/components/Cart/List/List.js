import { Paper } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import Quantity from './Quantity/Quantity'
import ProductDetails from './ProductDetails/ProductDetails';
import Delivery from './Delivery/Delivery';
import { baseUrl } from '../../../url'

function List({ items }) {

    return (
        <>
            <Paper sx={{
                m: '1rem'
            }}
            >
                {items && items.map((item, index) =>
                    <Box key={index}>
                        <Box sx={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent:'space-between',
                            alignItem:'center'
                        }}>
                            <Box sx={{
                                mt: '1rem',
                                mb: '0.5rem',
                                ml:'1rem'
                            }}>
                                <img src={baseUrl + '/' + item.url} alt='img' width={150} height={100}></img>
                                <Quantity item={item}/>
                            </Box>
                            <Box>
                                <ProductDetails item={item}/>
                            </Box>
                            <Box sx={{
                                ml: '7rem',
                                mt: '2rem'
                            }}>
                                <Delivery item={item}/>
                            </Box>

                        </Box>
                        <hr />
                    </Box>

                )}
            </Paper>
        </>
    )
}

export default List