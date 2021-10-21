import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './styles.css';
import { Grid } from '@material-ui/core';

import Divider from '@mui/material/Divider';



export default function MusicMashVertical() {
  return (
    <main className="main">
        <section className="header">
         <img src="https://64.media.tumblr.com/79531d65e98b10b1eaa74449c9516180/a694e947429ae226-46/s2048x3072/f97ed0409010ef78a66f59b91d68bd57dc8b52cd.png"  className="header-img" />     

        </section>
        
          <Container  className="container-outside">
          
            <section className="overview">
                  <Grid container direction="column" className="title h1-h3" spacing={2}>
                      <Grid item xs>
                        <h1>Musicmash</h1>
                      </Grid>
                      <Grid item xs>
                        <h3>A collective party space in Spotify</h3>
                      </Grid>
                      <Grid item xs>
                      <div className="center-controll"><img src="https://64.media.tumblr.com/764ee2fc6bd115960167ea806333dc22/cf9e8ea3022804b7-79/s2048x3072/3f57ba774cf480cdcd3439583b4a644dbfa44c36.png" className="figures"></img></div>
                      </Grid>

                  </Grid>
                  
              </section>
            <section className="problem">

              <Grid container direction="column" className="title h1-h2" spacing={2}>
                      <Grid item xs>
                        <h1>The Problem & Challenge </h1>
                      </Grid>
                      <Grid item xs>
                        <h2>Did you feel stressful and nervous when you are asked to be a DJ at parties?</h2>
                      </Grid>
                      <Grid item xs>
                        <h4>We interviewed 12 people ageing from 21 to 28 who recently had thrown parties and often performed as DJs at parties, we found that ten of the interviewees feel nervous when they performed as DJs at a party because they felt that " their music tastes would be judged", "people might not like their music", or "the party would become boring due to the bad choices of music". Therefore, this group of interviewees feel terrified to be a DJ at parties. Only two of the interviewees who have musical backgrounds were very confident with their music tastes and would like to share all genres of their playlists at parties with passion.</h4>
                      </Grid>
                      <Grid item xs>
                        <h2>The problem is that DJing at parties make people terrified.</h2>
                      </Grid>
                      <Grid item xs>
                          <h4>When DJs host a party they expect all guests will enjoy it and have no complaints about their music tastes. But people always have different music tastes. Party DJs found it very difficult to create a party playlist that can engage all party guests. They felt sad when people complain about their music tastes. Therefore, people fear being a DJ at a party, some of them randomly use recommended songs on Spotify rather than creating by themselves to avoid others’ judgements for their music tastes.</h4>
                      </Grid>
                      <Grid item xs>
                      <div className="center-controll"><h2>The <span className="highlighted"> problem </span>is that DJing at parties make people terrified.</h2></div>
                      </Grid>
                      <Grid item xs>
                          <h4>When DJs host a party they expect all guests will enjoy it and have no complaints about their music tastes. But people always have different music tastes. Party DJs found it very difficult to create a party playlist that can engage all party guests. They felt sad when people complain about their music tastes. Therefore, people fear being a DJ at a party, some of them randomly use recommended songs on Spotify rather than creating by themselves to avoid others’ judgements for their music tastes.</h4>
                      </Grid>
                      <Grid item xs>
                      <div className="center-controll"><h2>The <span className="highlighted"> challenge </span>is</h2></div>
                      </Grid>
                      <Grid item xs>
                          <div className="highlight-bg"><h4>Designing a way to relieve DJing pressure off from one person at parties and to make every party participants feel engaged, satisfied and connected. </h4></div>
                      </Grid>
                      
                  </Grid>
                  <div className="block"></div>
                  <Divider textAlign="right" variant="large" className="divider" ><p> Keep reading solution</p> </Divider>
              </section>

              




              <section className="solution">

              <Grid container direction="column" className="title h1-h2" spacing={2}>
                      <Grid item xs>
                        <h1>The solution </h1>
                      </Grid>
                      <Grid item xs>
                        <h2>Design a new feature in Spotify</h2>
                      </Grid>
                      <Grid item xs>
                        <h4>that enables a party DJ to create a collective party session, where all party participants can add their music into a playlist and collectively reorder the playlist by liking and dislike songs. </h4>
                      </Grid>
                      <Grid item xs>
                      <div className="center-controll"><img src="https://64.media.tumblr.com/d12b40567e0743823f0fb15bce74922d/a0d4bc9380a53193-eb/s640x960/dd82624e5ac40ac909fb50a2f0d03d4412a38969.gifv" className="figures"></img></div>
                      </Grid>
                      <div className="block"></div>
                      <Divider textAlign="right" variant="large" className="divider" ><p> Keep reading the design process</p> </Divider>
                      


                  </Grid>
                  
            </section>
              <section className="design-process user">
              <Grid container direction="column" className="title h1-h2" spacing={2}>
                      <Grid item xs>
                        <h1>The Design Process</h1>
                      </Grid>
                      <Grid item xs>
                        <h2>From the pain points to a product design</h2>
                      </Grid>
                      <Grid item xs>
                      <div className="center-controll"><img src="https://64.media.tumblr.com/cfcc9579dbf91fcb8c1dae773cb397ca/166be2c40e046282-54/s2048x3072/f3ee19550fe3d7b447eaf3e18ab6bc31563c2a27.png" className="figures"></img></div>
                      </Grid>
                      <Grid item xs>
                      <div className="center-controll"><img src="https://64.media.tumblr.com/7ffccc12d114c2a1e98e5d6c65fa3eac/30621a0fb4bbbd99-7f/s2048x3072/ef711aa5a56259f65dcc48ac301d4339116093c5.png" className="figures"></img></div>
                      </Grid>

                      <Grid item xs>
                        <h2>User Research</h2>
                      </Grid>
                      <Grid item xs>
                        <h4>As I mentioned in the beginning, we have interviewed 12 people, who are master students  at KTH based on Sweden. The interviewees regularly throw parties or join parties. At parties, most of them like using Spotify to play music when they DJ at a party, few of them use Apple Music.</h4>
                      </Grid>
                      <Grid item xs>
                      <div className="center-controll"><img src="https://64.media.tumblr.com/7ffccc12d114c2a1e98e5d6c65fa3eac/30621a0fb4bbbd99-7f/s2048x3072/ef711aa5a56259f65dcc48ac301d4339116093c5.png" className="figures"></img></div>
                      </Grid>



                      
                      <div className="block"></div>
                      <Divider textAlign="right" variant="large" className="divider" ><p> Keep reading the design process</p> </Divider>
                      


                  </Grid>
                  
              </section>
              <section className="design-process idea">
                  
              </section>
              <section className="design-process prototype">
                  
              </section>
              
        
        </Container>
    </main>
  );
}
