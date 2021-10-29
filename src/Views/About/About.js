import React from "react";
import ReactDOM from "react-dom";
import { Button, Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Deck from '../CardDeck/Deck';
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import './styles.css'
import { Typography } from "@material-ui/core";
import Footer from "../Home/Components/Footer";



export default function About() {

    return (
        <main className="background">
            <NavBar />
            
            <Grid container direction="row" spacing={20}>
                <Grid item xs>
                    <div className="profile-img">
                        <Grid container direction="column">
                            <Grid item xs>
                        <img className="me-img" src="https://64.media.tumblr.com/02cd1484629649f2e31b7e5ef3d40251/e2b979c63f0ebf23-5d/s2048x3072/77a21e8228821a4538881d4081a5feac8ff9dae0.jpg"></img>
                            </Grid>




                            <Grid item xs>
                                <div className="aboutme-social-media">
                                <Grid container direction="row" justifyContent="center" alignItems="center" alignContent="center" >

<Grid item xs={3}>
< a href="https://www.linkedin.com/in/miaomiao-liu-856290158/">
<Grid container direction="row" >
<Grid item xs={8}>
<Typography variant="h5">
Linkedin 
</Typography>

</Grid>
<Grid item xs={2}>
<img className="link-icon" src="https://64.media.tumblr.com/3bc65ead843791ab2d84a0ccf93406c4/5ae8b8eb58ced35f-fd/s75x75_c1/75182b70bdd13c5589c6cd9ae33ffa50cdcfb839.png"/>

</Grid>
</Grid>


</a>

</Grid>

<Grid item xs={3}>
<a href="https://www.behance.net/mewomewoliu">
<Grid container direction="row" >
<Grid item xs={8}>
<Typography variant="h5">
Behance
</Typography>

</Grid>
<Grid item xs={2}>
<img className="link-icon" src="https://64.media.tumblr.com/3bc65ead843791ab2d84a0ccf93406c4/5ae8b8eb58ced35f-fd/s75x75_c1/75182b70bdd13c5589c6cd9ae33ffa50cdcfb839.png"/>

</Grid>
</Grid>

</a>
            
</Grid> 
</Grid>
                                </div>

                    </Grid>


                        </Grid>
      
                    </div>
            </Grid>



                <Grid item xs>
                <Container className="about">

                    <Deck/> 
                    </Container>
                </Grid>


            </Grid>
            
      
        </main>
    );

}