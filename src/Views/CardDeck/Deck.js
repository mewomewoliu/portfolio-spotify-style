import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import './styles.css'

const cards = [
  
  'https://64.media.tumblr.com/0f5b789b768497e9307754aa7fbc50f7/b2b4887bb35ef721-12/s2048x3072/a58043fd9c1b8723144bf87f0e470d9c3a3ecf7a.png',
  'https://64.media.tumblr.com/f75e8a739ddeb25ab1fe5bfd3e538ec0/b2b4887bb35ef721-0a/s2048x3072/3982750b596607b7e3e05fa78167c88ace2279ca.png',
  'https://64.media.tumblr.com/7f58b0d35457840fbdbdc533ae97e2be/b2b4887bb35ef721-4d/s2048x3072/463e1c00345805e5114b25ff3dfb36378e6db94a.png'
]

const to = i => ({ x: 0, y: i * -4, scale: 0.8, rot: -5 + Math.random() * 10, delay: i * 200 })
const from = i => ({ x: 0, y: 0, rot: 0, scale: 0.1, y: -1000 })
const trans = (r, s) => `perspective(1500px) rotateX(0deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

export default  function Deck() {
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) }))
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.9
    const dir = xDir < 0 ? -1 : 1
    if (!down && trigger) gone.add(index)
    set(i => {
      if (index !== i) return
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
      const scale = down ? 1.0 : 1
      return { x, rot, scale, delay: 0.2, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
    </animated.div>
  ))
}