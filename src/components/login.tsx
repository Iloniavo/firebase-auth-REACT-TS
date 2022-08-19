import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import Background from './Background';


export default function Login(props:any){
    const [ email , setEmail ] = useState<string>("");
    const [ pass , setPassword ] = useState<string>("");

   
    
    function Copyright(props: any) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to={''} >
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
    
    
     return (     
     
       <Background>
        <div className="contain" style={{width: '60%', margin: 'auto', position: 'relative' , background: 'none' }}>
            <Grid item xs={12} sm={8} md={5} component={Paper}  sx={{borderRadius:'5px' , background: 'none'}} square>
            <Box maxWidth={'xl'} sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              }}>
           <div style={{ display: 'flex', marginTop: '20px'}} > 
           <h3 style={{paddingBottom :'2px'}}>Login</h3>
           <LoginIcon sx={{paddingTop: '5px'}}  />
           </div>
            
            <div className='input'>
                <Box component="form" noValidate sx={{ mt: 1 }} >
                   
                    <Grid item xs={12}>
                    <TextField 
                    margin="normal" 
                    fullWidth 
                    required 
                    autoFocus 
                    id="filled-basic" 
                    type="email" 
                    label="Email" 
                    variant="outlined" 
                    value={email}
                    onChange={(e:any) => setEmail(e.target.value)}
                    sx={{  color:'whitesmoke' }}
                     />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField margin="normal" required fullWidth autoFocus id="filled-basic" type="password" label="Password" variant="outlined" value={pass} onChange={(e:any) => setPassword(e.target.value)}/>
                    </Grid>
                        
                            <Stack direction="column" spacing={2}>
                                
                                <Button sx={{ fontSize: '2vh'}} fullWidth onClick={props.signIn} variant="contained">Sign in</Button>

                                <Stack direction="row" spacing={2} sx={{ justifyContent :'center', alignItems: 'center'}} >
                                        <Grid item xs={12} sm={4}>
                                        <Button sx={{ fontSize: '1.8vh'}} fullWidth onClick={props.signWithGoogle} variant="contained" color='error'><span> Google</span> <GoogleIcon/></Button>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <Button sx={{width :'10vw' , fontSize: '0.8rem'}} onClick={props.signWithGithub} variant="contained" color='secondary'><span> github</span> <GitHubIcon/> </Button>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                        <Button sx={{width :'10vw' , fontSize: '0.8rem'}} onClick={props.signWithFacebook} variant="contained" color='primary'><span> facebook</span>  <FacebookIcon/></Button>
                                        </Grid>
                                    </Stack>
                            </Stack>  
                                                  
                    
                </Box>
            </div> 
            <Copyright sx={{ mt: 5 , mb: 3}} />
            </Box>
            </Grid>
        </div>
        </Background>
     
      
    )
}