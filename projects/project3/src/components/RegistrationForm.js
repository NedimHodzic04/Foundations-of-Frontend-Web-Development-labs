import React, { useState } from 'react';
import { TextField, Button, Typography, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox } from '@mui/material';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '', 
    agreeToTerms: false, 
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === 'checkbox' ? checked : value; 
    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
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
    if (!data.surname.trim()) {
      errors.surname = 'Surname is required';
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
    if (!data.agreeToTerms) {
      errors.agreeToTerms = 'You must agree to the Terms of Service';
    }
    if (!data.gender) {
      errors.gender = 'Gender is required';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, textAlign: 'center' }}>
        Register your account
      </Typography>
      {submitted ? (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          You have successfully registered your account! Check your inbox for a confirmation email.
        </Alert>
      ) : (
        <form onSubmit={handleSubmit} style={{ width: '100%', marginBlock: '1rem' }}>
          <Box sx={{ width: '100%', mb: 2 }}>
            <TextField
              fullWidth
              variant="filled"
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
              variant="filled"
              label="Surname"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              error={!!errors.surname}
              helperText={errors.surname}
            />
          </Box>
          <Box sx={{ width: '100%', mb: 2 }}>
            <FormControl component="fieldset" error={!!errors.gender}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
              {errors.gender && <Typography variant="caption" color="error">{errors.gender}</Typography>}
            </FormControl>
          </Box>
          <Box sx={{ width: '100%', mb: 2 }}>
            <TextField
              fullWidth
              variant="filled"
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
              variant="filled"
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
              variant="filled"
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
          <Box sx={{ width: '100%', mb: 2 }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={formData.agreeToTerms} onChange={handleChange} name="agreeToTerms" />}
                label={
                  <Typography>
                    I agree to the <a href="/terms-of-service" style={{color:'blue'}}>Terms of Service</a>
                  </Typography>
                }
              />
              {errors.agreeToTerms && <Typography variant="caption" color="error">{errors.agreeToTerms}</Typography>}
            </FormGroup>
          </Box>
          <Button type="submit" variant="contained" color="primary" size="large" sx={{ width: '100%' ,backgroundColor:'	#0166B1', color:'#fff'}}>Register</Button>
        </form>
      )}
    </Box>
  );
}

export default RegistrationForm;
