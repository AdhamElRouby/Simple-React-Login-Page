import { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import Password from './Password';

const Form = () => {
  const [inputs, setInputs] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const correctUsername = 'admin';
  const correctPassword = '123456';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputs.username || !inputs.password)
      return setError('All fields are required.');
    if (
      inputs.username !== correctUsername ||
      inputs.password != correctPassword
    )
      return setError('Wrong Username or Password.');
    setError('');
    window.alert(
      `successfully logged in!\nUsername: ${inputs.username}, Password: ${inputs.password}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="username-input"
        name="username"
        label="Username"
        variant="outlined"
        value={inputs.username}
        onChange={handleInputChange}
        fullWidth
      />
      <Password value={inputs.password} handleInputChange={handleInputChange} />
      {error && (
        <Typography color="error" variant="body2">
          {`* ${error}`}
        </Typography>
      )}
      <Button
        variant="contained"
        disableElevation
        size="large"
        fullWidth
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

export default Form;
