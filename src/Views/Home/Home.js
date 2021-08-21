import React from "react";
import ReactDOM from "react-dom";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Nav from './Nav'
import './styles.css'



export default function Home() {
    


    return (
        <main className="main">
    <Container className="container">
            
           
            
            <Grid conatiner direction="column">
                    <Grid item>
                        <div className="intro-title">
                        <h2>Hej, I am Miaomiao</h2>
                        </div>
                
                </Grid>
                <Grid xs item>
                    <Container className="nav">
                        <Nav/>
                    </Container>
                </Grid>
                <Grid xs item>
                    <img src="https://64.media.tumblr.com/a1b757758ee949daf58da67a5235b120/f9f9e4d13cdd0dd3-b2/s1280x1920/3d9a95e842e530ddcb65957ead6e845e91c312b0.png" className="homeImage"/>
                </Grid>
            </Grid>

            
    </Container>
        </main>
       
    );
}
