import React from "react";
import ReactDOM from "react-dom";
import { Transition, animated } from "react-spring";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import NavBar from '../NavBar/NavBar';
import "./styles.css";


const images = [
  {
    "src": "https://64.media.tumblr.com/ff0ecfd155da6a0966afc2982f71d654/934ce67d0762d3ff-a4/s1280x1920/a5c7cf74f4dbfc5f5bf0f603720f32e2b2d3d91d.png",
    "name": "MusicMash Mabile",
    "time": "2021-08"
  },
  {
    "src": "https://64.media.tumblr.com/ff0ecfd155da6a0966afc2982f71d654/934ce67d0762d3ff-a4/s1280x1920/a5c7cf74f4dbfc5f5bf0f603720f32e2b2d3d91d.png",
    "name": "MusicMash Mabile",
    "time": "2021-08"
  },
  {
    "src": "https://64.media.tumblr.com/ff0ecfd155da6a0966afc2982f71d654/934ce67d0762d3ff-a4/s1280x1920/a5c7cf74f4dbfc5f5bf0f603720f32e2b2d3d91d.png",
    "name": "MusicMash Mabile",
    "time": "2021-08"
  },
  {
    "src": "https://64.media.tumblr.com/ff0ecfd155da6a0966afc2982f71d654/934ce67d0762d3ff-a4/s1280x1920/a5c7cf74f4dbfc5f5bf0f603720f32e2b2d3d91d.png",
    "name": "MusicMash Mabile",
    "time": "2021-08"
  },
  {
    "src": "https://64.media.tumblr.com/ff0ecfd155da6a0966afc2982f71d654/934ce67d0762d3ff-a4/s1280x1920/a5c7cf74f4dbfc5f5bf0f603720f32e2b2d3d91d.png",
    "name": "MusicMash Mabile",
    "time": "2021-08"
  },
  {
    "src": "https://64.media.tumblr.com/ff0ecfd155da6a0966afc2982f71d654/934ce67d0762d3ff-a4/s1280x1920/a5c7cf74f4dbfc5f5bf0f603720f32e2b2d3d91d.png",
    "name": "MusicMash Mabile",
    "time": "2021-08"
  },
  
]



export default function Portfolio() {
  

  const Imagewraper = ({ src, name, time }) => {
    
    return (
      <div className="wraper">
  <a href={src} class="card">
   
   <div class="content">
     <span class="title">{name}</span>
            <span class="category">{time}</span>
  </div>
          
   <div class="image">
     <img src={src} alt="" />
   </div>
 </a>
      

    
      </div>
    );
    
  }



  return (
    <main className="page">
      <Container className="header">
        <NavBar/>
      </Container>
      <Container className="projects">
        <div className="images-wraper">
        {images.map(image => (
          <Imagewraper src={image.src} name={image.name} time={image.time}/>
        ))}
        </div>
      </Container>
      

    </main>
  );

}
