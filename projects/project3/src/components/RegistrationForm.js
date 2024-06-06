import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

function RegistrationForm(){
const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {

      setSubmitted(true);
      console.log(formData);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email address';
    }

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2, mt:7.5 }}>
      <Typography variant="h4" gutterBottom>
        Registration Form
      </Typography>
      {submitted ? (
        <Typography variant="body1">Thank you for registering!</Typography>
      ) : (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <Box sx={{ width: '100%', mb: 2 }}>
            <TextField
              fullWidth
              label="Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
            />
          </Box>
          <Box sx={{ width: '100%', mb: 2 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
            />
          </Box>
          <Box sx={{ width: '100%', mb: 2 }}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Box>
          <Box sx={{ width: '100%', mb: 2 }}>
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary" size="large" sx={{ width: '100%' }}>Register</Button>
        </form>
      )}
    </Box>
  );
}

export default RegistrationForm;