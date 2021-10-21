import { render } from 'react-dom';
import React, { useState, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import { Container, Grid } from '@material-ui/core';
import './styles.css';
import { motion } from 'framer-motion';




const pages = [
//   ({ style }) => <animated.div style={{ ...style, backgroundImage: 'url("https://64.media.tumblr.com/9a6298a3b316db469d26e9cce6860cc0/8c081d469d2b93e7-86/s2048x3072/fd9ea3143c8d0a3b69984a320edf2e480f499f6a.png")', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: "no-repeat" }}>
//    <div className="name">

//      <h2>BEET</h2>
//      <p>2021.03-2021.08</p>

//    </div>
//   </animated.div>,
  ({ style }) => <animated.div style={{ ...style, backgroundColor:"#171313" }}>
  <Container>
          <h2>Musicmash gft </h2>
  </Container>
    </animated.div>,
    ({ style }) => <animated.div style={{ ...style, backgroundColor:"#171313" }}>
    <Container>
            <div className="vertical-title">
                <h2> Overview</h2>
            </div>
    </Container>
    </animated.div>,

  
     
]

export default function Musicmash() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 6), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <main>
      
      
<div className="simple-trans-main" onClick={onClick}>
     
     {transitions.map(({ item, props, key }) => {
       const Page = pages[item]
       return <Page key={key} style={props} />
     })}
   </div>
    </main>
    
  )
}