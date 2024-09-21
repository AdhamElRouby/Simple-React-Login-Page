import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

const Password = ({ value, handleInputChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormControl variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        id="password"
        name="password"
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={handleInputChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
};

export default Password;
