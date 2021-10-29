import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Grid } from '@material-ui/core';
import { height } from '@mui/system';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://uxmia.com">
        UXMia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '30vh',
      }}
    >
      <CssBaseline />

      
      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto'
        }}
      >
        <Box
      sx={{
        py:3,
        px: 2,
        mt: 'auto'
          }}>
          
      <Container maxWidth="sm" >
         
            <Grid container direction="row" justifyContent="center" alignItems="center" alignContent="center" >
              <Grid item xs={3}>
                < a href="https://www.linkedin.com/in/miaomiao-liu-856290158/">
                  <Grid container direction="row" justifyContent="center" alignItems="center" alignContent="center">
                    <Grid item xs={5}>
                    <Typography variant="h5">
                      Linkedin 
                    </Typography>

                    </Grid>
                    <Grid item xs={4}>
                    <img className="link-icon" src="https://64.media.tumblr.com/3bc65ead843791ab2d84a0ccf93406c4/5ae8b8eb58ced35f-fd/s75x75_c1/75182b70bdd13c5589c6cd9ae33ffa50cdcfb839.png"/>

                    </Grid>
                  </Grid>
              
                
                </a>
                
              </Grid>
              <Grid item xs={3}>
                <a href="https://www.behance.net/mewomewoliu">
                <Grid container direction="row" justifyContent="center" alignItems="center" alignContent="center">
                    <Grid item xs={5}>
                    <Typography variant="h5">
                      Behance
                    </Typography>

                    </Grid>
                    <Grid item xs={4}>
                    <img className="link-icon" src="https://64.media.tumblr.com/3bc65ead843791ab2d84a0ccf93406c4/5ae8b8eb58ced35f-fd/s75x75_c1/75182b70bdd13c5589c6cd9ae33ffa50cdcfb839.png"/>

                    </Grid>
                  </Grid>
                
                </a>
               </Grid> 
            </Grid>
           
          
        </Container>
      </Box>
        
        <div className="black"> </div>
        <Container maxWidth="sm">
          <Typography variant="body1">
            Designed & coded by Mia 
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}