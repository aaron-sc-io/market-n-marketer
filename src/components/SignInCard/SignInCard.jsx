import { TextField, Box, Button, Card, Typography, Divider, Alert } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';


// TODO Also add username/email login func
const SignInCard = ({ handleNavigateRoot, handleNavigateForgotPass, handleNavigateCreateAccount }) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleSignin } = useAuth();

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await handleSignin(username, password);
      handleNavigateRoot();
    } catch (e) {
      setError('Failed to sign in');
      // replace console logs with error switch display
      console.log(e);
    }
    setLoading(false);
  };

  return(
    <Card sx={{ width: '300px', minHeight: '350px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
        <Typography sx={{ fontSize: 40, mt: 1 }}> Log In </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField 
          id='email-address'
          label='Email Address'
          variant='filled'
          onChange={e => setUsername(e.target.value)}
          sx={{ width: '250px', my: 2 }}
          />
        <TextField
          id='password'
          label='Password'
          type='password'
          variant='filled'
          onChange={e => setPassword(e.target.value)}
          sx={{ width: '250px', mb: 2 }}
          />
        <Button 
          variant='contained' 
          disabled={loading} 
          onClick={handleSignInSubmit}
          sx={{ width: '150px', mb: 0.5 }}
        >
          Submit
        </Button>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <Button onClick={handleNavigateForgotPass} sx={{ textTransform: 'none', mb: 2 }}>
            <Typography sx={{ fontSize: 15 }}>Forgot Password? </Typography>
          </Button>
        </Box>
        <Divider variant="middle" style={{width:'80%'}} />
        <Box sx={{ display: 'flex', alignItems: 'center',  my: 3.5 }}>
          <Button sx={{ fontSize: 15, backgroundColor: 'primary' }} onClick={handleNavigateCreateAccount} variant='contained'>
            Create New Account
          </Button>
        </Box>  
      </Box>
    </Card>
  );
};

export default SignInCard;