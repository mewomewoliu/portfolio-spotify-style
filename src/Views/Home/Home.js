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
                            <h1>Hey, this is Mia</h1>
                            <h3>I am a UX Designer who aims to design engaging, minimal, clever products and systems. My goal is to offer users a comfortable experience that they can fall in love with and use in their everyday life.</h3>
                            <h3>With a combined background in Human-computer Interaction & Design and Innovation & Entrepreneurship, I like embedding business goals and strategies in designs.</h3>
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
