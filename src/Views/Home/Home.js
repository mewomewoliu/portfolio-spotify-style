import React from "react";
import ReactDOM from "react-dom";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Nav from './Nav'
import './styles.css'
import Footer from './Components/Footer';



export default function Home() {
    


    return (
        <main className="main">
    <Container className="container">
            
           
            
                <Grid conatiner direction="column" spacing={4}>
                   
                    
                        <Grid item xs>
                            <div className="intro-title">
                                <h1>Hej, I am Miaomiao</h1>
                                <h3>I am a UX Designer 
    who design engaging, minimal, smart interfaces for Websites & Mobile apps to optimize users’ experiences on sites and make audiences fall in love. </h3>
                            </div>
                    
                    </Grid>
                    <Grid item xs>
                        <div className="block">

                        </div>
                    </Grid>
                    
   
                <Grid item xs>
                    <Container className="nav">
                        <Nav/>
                    </Container>
                </Grid>
                    
                <Grid item xs>
                    <Footer/>
                </Grid>
            </Grid>

            
    </Container>
        </main>
       
    );
}
