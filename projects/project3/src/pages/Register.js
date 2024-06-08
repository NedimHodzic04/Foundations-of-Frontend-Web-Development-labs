import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import { Container } from '@mui/material';

function Register() {
    return(
        <Container sx={{mt:5}}>
        <RegistrationForm/>
        </Container>
    )
}


export default Register;
