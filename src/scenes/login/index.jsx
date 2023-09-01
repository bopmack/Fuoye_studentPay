import  React, {useState, useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { tokens } from "../../theme";
 
import Divider from '@mui/material/Divider';
 
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';

import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
 
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import OutlinedInput from '@mui/material/OutlinedInput';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useSelector } from 'react-redux';
// require dispatch hook from react-redux
// import { useDispatch } from 'react-redux';
 
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';

 
const Login = () => {

    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    // imitialize the useDispatch hook
    // const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  
//   const details = [CVDetails.message];
//   console.log("details", details)

  
 
  
  return (
    <Container 
    sx={{
        marginTop : '3rem'
    }}
    > 
      
    <Box sx={{flexGrow : 1}}>
         <Grid container sx={{  marginTop : isSmallScreen ? '5vh' : '20vh',  height : '70vh', justifyContent : 'center'}} spacing={2}>
            <Grid  
                    sx={{
                        display: isSmallScreen ? 'none' : 'block', //'16px',
                    }}
                    item sm={12} xs={12} md={6}>
                <Grid container spacing={2} 
                    sx={{
                        justifyContent: 'center',
                        display: 'flex',
                    }}
                >
                    <img  style={{height : '1.5rem'}}src={`../../assets/logo.png`} alt="Logo Image" />
                       <Grid item 
                      
                       sm={12} xs={12} md={12}>
                         
                                <Typography 
                                 sx={{
                                    width: '23rem',
                                     textAlign: 'center'
                                   }}
                                    m={4} variant="h5">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
                                </Typography>
                              
   
                        </Grid>
                        <Grid sm={12} xs={12} md={12} 
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                        >
                           <img style={{ height : '50vh', zIndex : '2',
                            position : 'relative'}} 
                            src={`../../assets/login1.png`} alt="welcome Image" />
                        </Grid>

                       
               
                </Grid>
            </Grid>
             <Grid sx={{borderLeft : isSmallScreen ? 'none' : '1.5px solid #E2E8F0', background : "rgba(255, 255, 255, 0.7)", marginTop: isSmallScreen ? '4rem' : ' ',}} item sm={12} md={6} >
                    <Box 
                        sx={{
                            marginTop: isSmallScreen ? '2rem' :'4rem',
                            marginLeft: isSmallScreen ? 'none' :'2rem',
                            // width : '26vw'
                        }}
                    >
                   <Box
               
                   >
                       
                        <Typography 
                           sx={{
                            fontSize : '33px', marginBottom : '15px', textAlign : "left", fontStyle : 'normal', fontWeight:'600', color : "#3C50E0"}}  
                            variant="h2">
                            Login
                        </Typography>

                        <Typography 
                        sx={{fontSize : '14px', textAlign : "left", fontStyle : 'normal', fontWeight:'400', 
                                        color : "rgba(0, 0, 0, 0.5)", lineHeight : '18px', }}  variant="h6" >
                          Enter your valid email address and password
                        </Typography>
                   </Box>

                   <Box mt={2}>
                            {/* begining of login form field */}

                        <FormControl    variant="outlined"
                        sx={{
                            '& fieldset':{
                                borderColor:'#3C50E0',
                                borderRadius:'7px',
                                
                               
                            },
                            marginBottom : '20px',
                        }}
                        >
                            <Typography 
                                    sx={{
                                        fontSize : '17px',
                                        textAlign : "left", 
                                        fontStyle : 'normal', 
                                        fontWeight:'400', 
                                        color : "#3C50E0", 
                                        lineHeight : '18px',
                                        marginBottom : '4px',
                                        marginLeft : '4px'  
                                    }}  
                                    variant="h6" >
                                    Email
                            </Typography>
                            <OutlinedInput
                                 sx={{ m: 1, width: '23rem', borderColor: '#3C50E0'}}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <EmailOutlinedIcon />
                                    </InputAdornment>
                                }
                                
                            />
                 
  
                        </FormControl>
                        

                        <FormControl  variant="outlined"
                        sx={{
                            '& fieldset':{
                                borderColor:'#3C50E0',
                                borderRadius:'7px',
                               
                            }
                        }}
                        >
                            <Typography 
                                    sx={{
                                        fontSize : '17px',
                                        textAlign : "left", 
                                        fontStyle : 'normal', 
                                        fontWeight:'400', 
                                        color : "#3C50E0", 
                                        lineHeight : '18px',
                                        marginBottom : '4px',
                                        marginLeft : '4px'  
                                    }}  
                                    variant="h6" >
                                    Password
                            </Typography>

                            <OutlinedInput
                              type="password"
                                 sx={{ m: 1, width: '23rem', borderColor: '#3C50E0'}}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <LockOutlinedIcon />
                                    </InputAdornment>
                                }
                                
                            />

                                <Grid sx={{marginLeft:'4px'}} container justifyContent="space-between" alignItems="center">
                                    <Grid item>
                                        <FormControlLabel
                                        control={<Checkbox color="primary" />}
                                        label="Remember my password"
                                        />
                                    </Grid>
                                                        <Grid item>
                                                            <Link to='/'  color="red">
                                                            Forgot Password?
                                                            </Link>
                                                        </Grid>
                                </Grid>

                        </FormControl>

                       


                            {/* end of login form field */}
           
                  
                        {/* <div style={{margin: "5px"}}>
                            <h6 style={{textAlign: "center"}}>Don't have an acoount? <Link to="/register">sign up</Link></h6>
                        </div> */}
                  

                </Box>
                 
                <Button 
                  
                  sx={{width: "70%", background : "#3C50E0",
                        marginLeft: "4px"
                    }} variant="contained" 
                  color="primary">
                           Login
                       </Button> 
                   </Box> 
                   <Grid sx={{marginTop:'4px'}} container justifyContent="center" alignItems="center">
                                     
                                                        <Grid item 
                                                        sx={{
                                                            marginLeft: '-75px',
                                                        }}
                                                        >
                                                            <Link
                                                              
                                                            to='/'  color="red">
                                                            Don’t have an account? Sign Up
                                                            </Link>
                                                        </Grid>
                                </Grid>
                   
             </Grid>
         </Grid>
    </Box>
         
    </Container>
  );
};

export default Login;
