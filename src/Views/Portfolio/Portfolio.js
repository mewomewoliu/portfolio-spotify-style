
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

    


      {/* ======= Project MusicMashApp ========= */}
      <section className="sec-projects">
        <div>
        <div className="project-intro down"></div>
        <a href="https://uxmia.notion.site/MusicMash-fdf1996c425e48b8bd7919bedc9cdf83"><div className="project-intro text-up">
            <Grid container direction="column" className="text-intro">
              <Grid item xs>
                <h1> MusicMash. <span className="small-text">app</span></h1>
                <h3>A collective party space in Spotify</h3>
              </Grid>
              <Grid item xs>
                <h2>Relieve the Dj-ing pressure off from one person and
                  keep everyone at party entertained.</h2>
              </Grid>
              
            </Grid>

        </div></a> 

        <div className="project-image down"></div>
        <a href="https://music-mash.notion.site/MusicMash-fdf1996c425e48b8bd7919bedc9cdf83"><div className="project-image up">
        <img src="https://64.media.tumblr.com/2fdec80c6dbd9d7af75edf3852180927/ab5c1ce57c25b01a-a2/s2048x3072/56e6aac62c0d97aef5c3c2b39d525333b03c6a1e.png" className="project"/>
        </div></a>
        </div>
      </section>





      {/* ======= Project 2 ========= */}
      <section className="sec-projects">
        <div>
        <div className="project-intro down"></div>
        <a href="https://music-mash.notion.site/MusicMash-fdf1996c425e48b8bd7919bedc9cdf83"><div className="project-intro text-up">
            <Grid container direction="column" className="text-intro">
              <Grid item xs>
                <h1> YourBEET<span className="small-text">[climate change] .app</span></h1>
                <h3>A recipe app caring your macro nutrition intake</h3>
              </Grid>
              <Grid item xs>
                <h2>Support new vegetarians to continue their plant-based journey, and care the environment at the same time. </h2>
              </Grid>
              
            </Grid>

        </div></a> 

        <div className="project-image down"></div>
        <a href="#"><div className="project-image up">
        <img src="https://64.media.tumblr.com/15def8d3c3c8cf3094ae7f43890d781c/c30adbb4289353cc-06/s2048x3072/25da2d77e253cdf7ec8173f1cb721751cca295f3.png" className="project"/>
        </div></a>
        </div>
      </section>



      {/* ======= Project 3 ========= */}
      <section className="sec-projects">
        <div>
        <div className="project-intro down"></div>
        <a href="https://music-mash.notion.site/MusicMash-fdf1996c425e48b8bd7919bedc9cdf83"><div className="project-intro text-up">
            <Grid container direction="column" className="text-intro">
              <Grid item xs>
                <h1> YourBEET<span className="small-text">[climate change] .Web</span></h1>
                <h3>A recipe app caring your macro nutrition intake</h3>
              </Grid>
              <Grid item xs>
                <h2>Support new vegetarians to continue their plant-based journey, and care the environment at the same time. </h2>
              </Grid>
              
            </Grid>

        </div></a> 

        <div className="project-image down"></div>
        <a href="#"><div className="project-image up">
        <img src="https://64.media.tumblr.com/b02f20605da39996a8495b223e523da8/0cb1f1f7c7b8a4ae-35/s2048x3072/5ea7b8f93bc90f3ed9282ba312fcb073438a41a2.png" className="project"/>
        </div></a>
        </div>
      </section>



      {/* ======= Project 4 ========= */}
      <section className="sec-projects">
        <div>
        <div className="project-intro down"></div>
        <a href="https://music-mash.notion.site/MusicMash-fdf1996c425e48b8bd7919bedc9cdf83"><div className="project-intro text-up">
            <Grid container direction="column" className="text-intro">
              <Grid item xs>
                <h1> MusicMash<span className="small-text">.Web</span></h1>
                <h3>A Web based collective music party app</h3>
              </Grid>
              <Grid item xs>
                <h2>Relieve the Dj-ing pressure off from one person and
                  keep everyone at party entertained.</h2>
              </Grid>
              
            </Grid>

        </div></a> 

        <div className="project-image down"></div>
        <a href="#"><div className="project-image up">
        <img src="https://64.media.tumblr.com/1f80c4940d6c9ded1ea30bb13df25414/b310631cd06fb98c-39/s2048x3072/71cdbf00004c86330ed4c96f55c7a711476d4cd9.png" className="project"/>
        </div></a>
        </div>
      </section>

     
      


      {/* ======= Project 5 ========= */}
      <section className="sec-projects">
        <div>
        <div className="project-intro down"></div>
        <a href="https://music-mash.notion.site/MusicMash-fdf1996c425e48b8bd7919bedc9cdf83"><div className="project-intro text-up">
            <Grid container direction="column" className="text-intro">
              <Grid item xs>
                <h1> YourBEET<span className="small-text">[climate change]</span></h1>
                <h3>A recipe app caring your macro nutrition intake</h3>
              </Grid>
              <Grid item xs>
                <h2>Support new vegetarians to continue their plant-based journey, and care the environment at the same time. </h2>
              </Grid>
              
            </Grid>

        </div></a> 

        <div className="project-image down"></div>
        <a href="#"><div className="project-image up">
        <img src="#" className="project"/>
        </div></a>
        </div>
      </section>
      

      {/* ======= Project 6 ========= */}
      <section className="sec-projects">
        <div>
        <div className="project-intro down"></div>
        <a href="https://music-mash.notion.site/MusicMash-fdf1996c425e48b8bd7919bedc9cdf83"><div className="project-intro text-up">
            <Grid container direction="column" className="text-intro">
              <Grid item xs>
                <h1> YourBEET<span className="small-text">[climate change]</span></h1>
                <h3>A recipe app caring your macro nutrition intake</h3>
              </Grid>
              <Grid item xs>
                <h2>Support new vegetarians to continue their plant-based journey, and care the environment at the same time. </h2>
              </Grid>
              
            </Grid>

        </div></a> 

        <div className="project-image down"></div>
        <a href="#"><div className="project-image up">
        <img src="#" className="project"/>
        </div></a>
        </div>
      </section>


    </main>
    
  )
}



