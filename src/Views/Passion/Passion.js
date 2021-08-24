import { render } from 'react-dom'
import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './styles.css'
import NavBar from '../NavBar/NavBar'
const pages = [
  ({ style }) => <animated.div style={{ ...style, background: 'white' }}> <img className="sketch" src="https://64.media.tumblr.com/56b38435f2dab2207cf7cc96352a3160/1788ce4a84f3234d-57/s2048x3072/d64d078d64d69b869a731cc2bd395da1a054e3ab.png" alt="sketch"/> </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'white' }}> <img className="sketch" src="https://64.media.tumblr.com/fd8594f767223b1a565a076410a3825a/1788ce4a84f3234d-f8/s2048x3072/cb76a70d5d9c4f3837361bd893e515b8e0b51f54.png" alt="sketch" /> </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'white' }}> <img className="sketch" src="https://64.media.tumblr.com/781dd93bc356ab3465fae0ff312ca9f8/1788ce4a84f3234d-87/s2048x3072/f4b191f2229cdbfbee64bfa7f78fab31a4dca2ca.png" alt="sketch" /> </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'white' }}> <img className="sketch" src="https://64.media.tumblr.com/5eaaab4b4b84a5ef1fd4452fe6db9bef/1788ce4a84f3234d-cd/s2048x3072/ef21600b138f242f58f66f66f5df885b4e13a5be.png" alt="sketch" /> </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'white' }}> <img className="sketch" src="https://64.media.tumblr.com/6f70ec2b91744e62a4cb42ffef7dbb15/1788ce4a84f3234d-38/s2048x3072/07a05b1078ec4ef3c8549313be0d2ba7d9a3a5a9.png" alt="sketch" /> </animated.div>,
  ({ style }) => <animated.div style={{ ...style, background: 'white' }}> <img className="sketch" src="https://64.media.tumblr.com/df7e1e613c9df82522522701d13d3429/1788ce4a84f3234d-45/s2048x3072/b63b7c6b227de9206437390271a567d6891379ab.png" alt="sketch" /> </animated.div>
]

export default function Passion() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 6), [])
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


