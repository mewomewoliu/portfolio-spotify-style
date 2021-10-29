import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import './styles.css'

const cards = [
  'https://64.media.tumblr.com/7f237f61b82475e7c9bba93b28de3b59/a36499a9a0626fc9-fb/s1280x1920/017c4467c57dd95e87d19b0ee71949e05ace51a9.png',
  'https://64.media.tumblr.com/87809dc22993f4994039fea69a57b3c2/d85a65bb650f1dfa-bb/s1280x1920/1be579012f3e79537acd6f31b82bb8d72c62e41c.png',
  'https://64.media.tumblr.com/7e9863b5a459f070b93c132f1f1d9806/d85a65bb650f1dfa-4b/s1280x1920/de41b20ed9482352e19a5f873f13c54ba916bded.png',
  'https://64.media.tumblr.com/79bb92ad29cb157cf37af236acd273de/a36499a9a0626fc9-98/s1280x1920/db1c666e1eb912fae591ad0c5a1ba4ec4e4667bd.png'
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