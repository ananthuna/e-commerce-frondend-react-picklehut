import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import RadioButton from './RadioButton'
import Button from '@mui/material/Button';
import { Alert, Typography } from '@mui/material';
import axios from 'axios';
import { baseUrl } from '../../../url'
import { UserContext } from '../../../Context/Context';

export default function StateTextFields() {
    const [fname, setfName] = React.useState('');
    const [lname, setlName] = React.useState('');
    const [email, setEmail] = React.useState('')
    const [number, setNumber] = React.useState('')
    const { user, setUser } = React.useContext(UserContext)

    React.useEffect(() => {
        
        let token = localStorage.getItem("token")
        token = JSON.parse(token)
        const customConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
        axios.post(`${baseUrl}/api/user/userData`, customConfig)
            .then((res) => {
                console.log(res.data);
                setUser(res.data)
                setfName(res.data.firstName)
                setlName(res.data.lastName)
                setEmail(res.data.email)
                setNumber(res.data.number)
            })

    }, [])


    const handlesave = () => {
        let token = localStorage.getItem("token")
        token = JSON.parse(token)
        const customConfig = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        }
        const Data = {
            firstName: fname,
            lastName: lname,
            email: email,
            number: number
        }
        axios.patch(`${baseUrl}/api/user/profileUpdate`, Data, customConfig)
            .then((response) => {
                console.log(response.data);
                if (response.data) {
                    setUser(response.data)
                }
            })
    }

    const handlefName = (e) => {
        setfName(e.target.value)
    }

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                bgcolor: 'white',
                width: '65rem',
                p: '2rem',
                borderRadius: '1rem',
                boxShadow: "1px 1px 6px 0px grey"
            }}
            noValidate
            autoComplete="off"
        >
            <Typography><b>Profile Information</b></Typography>
            <TextField
                id="outlined-name"
                label="First Name"
                value={fname}
                onChange={handlefName}

            />
            <TextField
                id="outlined-uncontrolled"
                label="Last Name"
                value={lname}
                onChange={(e) => setlName(e.target.value)}
            />
            <Box>
                {/* <RadioButton /> */}
            </Box>
            <Typography><b>Email Address</b></Typography>
            <TextField
                id="outlined-name"
                label='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Typography><b>Mobile Number</b></Typography>

            <TextField
                id="outlined-name"
                label="Mobile Number"
                value={'+91' + number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <Button variant="contained" sx={{
                bgcolor: '#ef6c00',
                "&:hover": { backgroundColor: "#ef6c00" },
                top: '1rem',
                left: '15rem'
            }}
                onClick={handlesave}
            >Save Changes</Button>

        </Box>
    );
}
