import { TextField, Box, Button, Card, Typography, Alert, Divider } from '@mui/material';

const PasswordResetCard = ({ handleForgotPassSubmit, handleNavigateSignIn, loading, error, message, setUsername }) => {
  console.log(message);
  return (
    <Card sx={{ width: '300px', minHeight: '350px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 1 }}>
        <Typography sx={{ fontSize: 25, mt: 7 }}> Forgot Password? </Typography>
        <Typography sx={{ fontSize: 15, mb: 2 }}> Enter your email to reset </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <TextField 
          id='email-address'
          label='Email Address'
          variant='filled'
          onChange={e => setUsername(e.target.value)}
          sx={{ width: '250px', my: 2 }}
          />
        <Button 
          variant='contained' 
          disabled={loading} 
          onClick={handleForgotPassSubmit}
          sx={{ width: '150px', mb: 4 }}
        >
          Reset
        </Button>
        <Divider variant="middle" style={{width:'80%'}} />
        <Box sx={{ display: 'flex', alignItems: 'center',  mt: 2 }}>
          <Typography sx={{ fontSize: 15 }}>Already have an account?   </Typography>
          <Button onClick={handleNavigateSignIn}>Sign In</Button>
        </Box>    
      </Box>
    </Card>
  )
}

export default PasswordResetCard;