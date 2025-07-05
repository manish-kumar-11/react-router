import React from 'react'
import { useEffect,useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  MenuItem,
  Box
} from '@mui/material';
import useCountries from '../utils/useCountries';

// const indianStates = ['Maharashtra', 'Karnataka', 'Delhi'];
// const citiesByState = {
//   Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
//   Karnataka: ['Bangalore', 'Mysore'],
//   Delhi: ['New Delhi', 'Dwarka']
// };




const Product = () => {
   const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    lastName: '',
    gender: '',
    country: '',
    state: '',
    city: '',
    pinCode: ''
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const world = useCountries()
  const countries = world.countries
  const indianStates = world.indianStates
  const citiesByState = world.citiesByState

  useEffect(() => {
    if (formData.country === 'India') {
      setStates(indianStates);
    } else {
      setStates([]);
      setCities([]);
    }
    setFormData({ ...formData, state: '', city: '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.country]);

  useEffect(() => {
    setCities(citiesByState[formData.state] || []);
    setFormData(prev => ({ ...prev, city: '' }));
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     // const res = await axios.post('https://your-backend-api.com/submit', formData);
    //  console.log('Submitted:', res.data);
    } catch (err) {
      console.error('Error:', err);
    }
  }
  return (
    <Box component="form" sx={{ p: 3, maxWidth: 500, mx: 'auto' }} onSubmit={handleSubmit}>
      <TextField fullWidth margin="normal" label="Name" name="name" value={formData.name} onChange={handleChange} required />
      <TextField fullWidth margin="normal" label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required />
      <TextField fullWidth margin="normal" label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required />

      <FormControl component="fieldset" margin="normal">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>

      <TextField
        select
        fullWidth
        margin="normal"
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        required
      >
        {countries.map((country) => (
          <MenuItem key={country} value={country}>{country}</MenuItem>
        ))}
      </TextField>

      {states.length > 0 && (
        <TextField
          select
          fullWidth
          margin="normal"
          label="State"
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          {states.map((state) => (
            <MenuItem key={state} value={state}>{state}</MenuItem>
          ))}
        </TextField>
      )}

      {cities.length > 0 && (
        <TextField
          select
          fullWidth
          margin="normal"
          label="City"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        >
          {cities.map((city) => (
            <MenuItem key={city} value={city}>{city}</MenuItem>
          ))}
        </TextField>
      )}

      <TextField
        fullWidth
        margin="normal"
        label="Pin Code"
        name="pinCode"
        value={formData.pinCode}
        onChange={handleChange}
        required
        inputProps={{ maxLength: 6 }}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  )
}

export default Product