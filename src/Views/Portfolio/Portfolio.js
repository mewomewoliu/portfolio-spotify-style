// import React from "react";
// import ReactDOM from "react-dom";
// import { Transition, animated } from "react-spring";
// import { Container } from "@material-ui/core";
// import { Grid } from "@material-ui/core";
// import NavBar from '../NavBar/NavBar';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import "./styles.css";
// import { Gesture } from "react-with-gesture";


// const images = [
//   {
//     "src": "https://64.media.tumblr.com/ff0ecfd155da6a0966afc2982f71d654/934ce67d0762d3ff-a4/s1280x1920/a5c7cf74f4dbfc5f5bf0f603720f32e2b2d3d91d.png",
//     "name": "MusicMash Mabile",
//     "time": "2021-08"
//   },
//   {
//     "src": "https://64.media.tumblr.com/ff0ecfd155da6a0966afc2982f71d654/934ce67d0762d3ff-a4/s1280x1920/a5c7cf74f4dbfc5f5bf0f603720f32e2b2d3d91d.png",
//     "name": "MusicMash Mabile",
//     "time": "2021-08"
//   },
//   {
//     "src": "https://64.media.tumblr.com/ff0ecfd155da6a0966afc2982f71d654/934ce67d0762d3ff-a4/s1280x1920/a5c7cf74f4dbfc5f5bf0f603720f32e2b2d3d91d.png",
//     "name": "MusicMash Mabile",
//     "time": "2021-08"
//   },
//   {
//     "src": "https://64.media.tumblr.com/ff0ecfd155da6a0966afc2982f71d654/934ce67d0762d3ff-a4/s1280x1920/a5c7cf74f4dbfc5f5bf0f603720f32e2b2d3d91d.png",
//     "name": "MusicMash Mabile",
//     "time": "2021-08"
//   },
//   {
//     "src": "https://64.media.tumblr.com/ff0ecfd155da6a0966afc2982f71d654/934ce67d0762d3ff-a4/s1280x1920/a5c7cf74f4dbfc5f5bf0f603720f32e2b2d3d91d.png",
//     "name": "MusicMash Mabile",
//     "time": "2021-08"
//   },
//   {
//     "src": "https://64.media.tumblr.com/17976e99ad2c29c381f6cd893def680b/beda7b3ba76b0c4c-3e/s1280x1920/968e723e1734167e73a7a184df47dcc8fbacb675.png",
//     "name": "MusicMash Mabile",
//     "time": "2021-08"
//   },
  
// ]



// export default function Portfolio() {
  

//   const Imagewraper = ({ src, name, time }) => {
    
//     return (
//       <div className="wraper">
  
        
        
//         <Card className="card" >
//           <CardActionArea>
//             <CardMedia
//             component="img"
//             alt={name}
            
//             image={src}
//             title={name}
//             className="project-image" 
//             / >

           
//             <CardContent className="content">
//                 <h3>{name}</h3>
//                 <h5>{time}</h5>
//             </CardContent>
//           </CardActionArea>
//         </Card>
          
      
       
      

    
//       </div>
//     );
    
//   }



//   return (
//     <main className="page">
//       <Container className="header">
//         <NavBar/>
//       </Container>
//       <Container className="projects-wraper">
//       <Container className="projects">
//         <Grid container className="images-wraper" spacing={5} justifyContent="center" alignItems="center" >
//           {images.map(image => (
//             <Grid item xs className="items">
//               <Imagewraper src={image.src} name={image.name} time={image.time}/>
//               </Grid>
              
          
//         ))}
//         </Grid>
//       </Container>
      
// </Container>
//     </main>
//   );

// }
import { render } from 'react-dom';
import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import { Container, Grid } from '@material-ui/core';
import './styles.css';
import NavBar from '../NavBar/NavBar';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { motion } from "framer-motion"




// const pages = [
//   ({ style }) => <animated.div style={{ ...style, backgroundImage: 'url("https://64.media.tumblr.com/9a6298a3b316db469d26e9cce6860cc0/8c081d469d2b93e7-86/s2048x3072/fd9ea3143c8d0a3b69984a320edf2e480f499f6a.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
//    <div className="name">
      
//      <h2>BEET</h2>
//      <p>2021.03-2021.08</p>

//    </div>
//   </animated.div>,
//   ({ style }) => <animated.div style={{ ...style, backgroundImage: 'url("https://64.media.tumblr.com/9a6298a3b316db469d26e9cce6860cc0/8c081d469d2b93e7-86/s2048x3072/fd9ea3143c8d0a3b69984a320edf2e480f499f6a.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
//   <div className="name">

//     <h2>COSE</h2>
//     <p>2021.03-2021.05</p>

//   </div>
//   </animated.div>,
//   ({ style }) => <animated.div style={{ ...style, backgroundImage: 'url("https://64.media.tumblr.com/1edb07067ab0b1ac02ad229226eaec53/2935b7cbb08a650a-76/s2048x3072/6636561db9c487441fbdfd730a32c8a112afe96d.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
//     <div className="name">

//           <h2>Music Mash Mobile</h2>
//           <p>2021.03-2021.05</p>
    
//     </div>
    
//   </animated.div>,
//   ({ style }) => <animated.div style={{ ...style, backgroundImage: 'url("https://64.media.tumblr.com/eead9f94073ad966e759739cd0f917b7/0917eb3895905530-8c/s2048x3072/c2f24e8b08048b468623b00eb3a946d364f22fcc.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
//       <div className="name">

//         <h2>Music Mash Web</h2>
//         <p>2021.03-2021.05</p>

//       </div>
//   </animated.div>,
//   ({ style }) => <animated.div style={{ ...style, backgroundImage: 'url("https://64.media.tumblr.com/9a6298a3b316db469d26e9cce6860cc0/8c081d469d2b93e7-86/s2048x3072/fd9ea3143c8d0a3b69984a320edf2e480f499f6a.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
//     <div className="name">

//       <h2>Living Memory</h2>
//       <p>2021.04-2021.06</p>

//     </div>
//     </animated.div>,
   
//     ({ style }) => <animated.div style={{ ...style, backgroundImage: 'url("https://64.media.tumblr.com/9a6298a3b316db469d26e9cce6860cc0/8c081d469d2b93e7-86/s2048x3072/fd9ea3143c8d0a3b69984a320edf2e480f499f6a.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
//     <div className="name">

//       <h2>Magic Window</h2>
//       <p>2021.03-2021.05</p>

//     </div>
//   </animated.div>,
     
// ]

export default function Portfolio() {
  // const [index, set] = useState(0)
  // const onClick = useCallback(() => set(state => (state + 1) % 6), [])
  // const transitions = useTransition(index, p => p, {
  //   from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  //   enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
  //   leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  // })
  return (
    <main className="projects-page">
      
      <NavBar/>
{/* <div className="simple-trans-main" onClick={onClick}>
     
     {transitions.map(({ item, props, key }) => {
       const Page = pages[item]
       return <Page key={key} style={props} />
     })}
   </div> */}
      <div className="sec-one">
        <h2>My recent projects</h2>
      </div>

      
      {/* ======= Project 1 ========= */}
      <section className="sec-projects">
        <Container>
        <div className="project-intro">
            <Grid container direction="column" className="text-intro">
              <Grid item xs>
                <h2> Musicmash Web</h2>
                <h3>A collective music player</h3>
              </Grid>
              <Grid item xs>
                <h1>Relieve the Dj-ing pressure off from one person and
                  keep everyone at party entertained.</h1>
              </Grid>
              <Grid item xs>
                <Link to="/musicmash">
                  <motion.svg
                    className="ploygon"
                    whileHover={{ scale:1.5 }}
                    width="117" height="115"
                    viewBox="0 0 117 115"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.0692 35.5852C30.4439 25.4632 41.1333 18.5549 50.1051 23.2828L77.2517 37.5883L104.721 51.2632C113.8 55.7827 114.438 68.4941 105.858 73.9L79.8954 90.2569L54.3177 107.209C45.8645 112.811 34.537 107.008 34.1456 96.8745L32.9613 66.2121L31.0692 35.5852Z" fill="#FFC664"/>
              </motion.svg>
              </Link>

              </Grid>
            </Grid>

        </div>


        <div className="project-image">

        </div>
        </Container>

      </section>

      {/* ======= Project 2 ========= */}
      <section className="sec-projects">
        <div>
        <div className="project-intro">
            <Grid container direction="column" className="text-intro">
              <Grid item xs>
                <h2> Musicmash App</h2>
                <h3>A collective music app</h3>
              </Grid>
              <Grid item xs>
                <h1>Relieve the Dj-ing pressure off from one person and
                  keep everyone at party entertained.</h1>
              </Grid>
              <Grid item xs>
                <Link to="/musicmash">
                  <motion.svg
                    className="ploygon"
                    whileHover={{ scale:1.5 }}
                    width="117" height="115"
                    viewBox="0 0 117 115"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.0692 35.5852C30.4439 25.4632 41.1333 18.5549 50.1051 23.2828L77.2517 37.5883L104.721 51.2632C113.8 55.7827 114.438 68.4941 105.858 73.9L79.8954 90.2569L54.3177 107.209C45.8645 112.811 34.537 107.008 34.1456 96.8745L32.9613 66.2121L31.0692 35.5852Z" fill="#FFC664"/>
              </motion.svg>
              </Link>

              </Grid>
            </Grid>

        </div>


        <div className="project-image">

        </div>
        </div>

      </section>

     
      


    </main>
    
  )
}
