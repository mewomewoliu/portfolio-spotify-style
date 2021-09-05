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
                    <img src="https://64.media.tumblr.com/c5db6de6ba179dd434ba148d2299d231/bb59e8c47a2fe029-95/s2048x3072/42422fc3b280609b968fa83c7ce74228299cae46.png" alt="Mia" className="homeImage"/>
                </Grid>
            </Grid>

            
    </Container>
        </main>
       
    );
}
