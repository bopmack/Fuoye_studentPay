import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Link, Grid, Container } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    footer: {
      marginTop: '2rem',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
      },
    },
    link: {
      margin: theme.spacing(2, 1),
      marginTop: '10px',
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(1, 3),
      },
    },
  }));

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
    const classes = useStyles();
  return (
     
        <Box
          component="footer"
         
        >

<AppBar

sx={{
    py: 2,
    px: 2,
    mt: 'auto',
    backgroundColor: (theme) =>
      theme.palette.mode === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  }}
  
position="static" className={classes.footer}>
      <Container maxWidth="lg" className={classes.container}>
        <Box sx={{marginTop:'12px'}}>
          <Link href="#" color="inherit" className={classes.link}>
            Contact Us
          </Link>
          <Link href="#" color="inherit" className={classes.link}>
            Privacy and Policy
          </Link>
          <Link href="#" color="inherit" className={classes.link}>
            Login
          </Link>
          <Link href="#" color="inherit" className={classes.link}>
            Sign Up
          </Link>
        </Box>

        <div>
          <IconButton color="inherit">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit">
            <LinkedInIcon />
          </IconButton>
        </div>
      </Container>
    </AppBar>
</Box>
   
    
  );
}