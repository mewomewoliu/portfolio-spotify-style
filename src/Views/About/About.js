import React from "react";
import ReactDOM from "react-dom";
import { Button, Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Deck from '../CardDeck/Deck';
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import './styles.css'



export default function About() {

    return (
        <main className="background">
            <NavBar/>
            <Container className="about">
            <Deck/> 
            </Container>
            
        </main>
    );

}