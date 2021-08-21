import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './styles.css'
import NavBar from '../NavBar/NavBar'
const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
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
      {/* <div className="logo">
				<img className="logo-img" src="https://64.media.tumblr.com/3ad4b7267cd1af63cd4f0af474ff6c0a/c4282aa208b95acd-a6/s1280x1920/6ca9598cd0b31330c0e41040a612f97fe4e5fb23.png" alt="logo"/>
			</div> */}
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


