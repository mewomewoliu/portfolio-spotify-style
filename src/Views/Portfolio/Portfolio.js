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
import { Grid } from '@material-ui/core';
import './styles.css';
import NavBar from '../NavBar/NavBar';



const pages = [
  ({ style }) => <animated.div style={{ ...style, backgroundImage: 'url("https://64.media.tumblr.com/1edb07067ab0b1ac02ad229226eaec53/2935b7cbb08a650a-76/s2048x3072/6636561db9c487441fbdfd730a32c8a112afe96d.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
    <div className="name">
    
          <h2>Music Mash</h2>
          <p>2021.03-2021.05</p>
    
    </div>
    
  </animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage: 'url("https://64.media.tumblr.com/0b6d42df8084696065c1c87a5feae78f/8a4be9efbb8939b6-27/s2048x3072/bcd094efaea5b4b3c73f146a503e14b0eafde338.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}> </animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage: 'url("https://64.media.tumblr.com/0b6d42df8084696065c1c87a5feae78f/8a4be9efbb8939b6-27/s2048x3072/bcd094efaea5b4b3c73f146a503e14b0eafde338.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}> </animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage: 'url("https://64.media.tumblr.com/0b6d42df8084696065c1c87a5feae78f/8a4be9efbb8939b6-27/s2048x3072/bcd094efaea5b4b3c73f146a503e14b0eafde338.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}> </animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage: 'url("https://64.media.tumblr.com/0b6d42df8084696065c1c87a5feae78f/8a4be9efbb8939b6-27/s2048x3072/bcd094efaea5b4b3c73f146a503e14b0eafde338.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}> </animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundImage: 'url("https://64.media.tumblr.com/0b6d42df8084696065c1c87a5feae78f/8a4be9efbb8939b6-27/s2048x3072/bcd094efaea5b4b3c73f146a503e14b0eafde338.png")', backgroundPosition: 'center', backgroundSize:'cover', backgroundRepeat:"no-repeat"}}> </animated.div>,
]

export default function Passion() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <main>
      
      <NavBar/>
<div className="simple-trans-main" onClick={onClick}>
     
     {transitions.map(({ item, props, key }) => {
       const Page = pages[item]
       return <Page key={key} style={props} />
     })}
   </div>
    </main>
    
  )
}
