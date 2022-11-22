import { Box, Typography } from '@mui/material'
import React from 'react'
import Link from '@mui/material/Link';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './footer.css'

function Copyright(props) {


    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function footer() {
    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            mt: '2rem',
            mb: '2rem'
        }}>
            <hr />
            <Box sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mr: '4rem',
                ml: '4rem'
            }}>
                <Box>
                    <img alt='img' src={process.env.PUBLIC_URL + '/LOGO-1536x640.jpg'}  width="250" height="100"></img>
                    <Copyright />
                </Box>
                <Box>
                    <Typography>The Journey To Pickle Hut</Typography>
                    <Typography>You can find taste home made pickle herewith us</Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: 2
                    }}>
                        <InstagramIcon className='icon'/>
                        <FacebookIcon className='icon'/>
                        <TwitterIcon className='icon'/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default footer