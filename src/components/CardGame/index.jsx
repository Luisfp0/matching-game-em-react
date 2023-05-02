import { useState } from 'react'
import './style.css'

function CardGame(props) {
  const back = './Images/alura-pixel.png'
  const front = `./Images/${props.figure}.png`

  const [visible, setVisible] = useState(false)
  function toggle() {
    setVisible(!visible)
  }

  return (
    <article onClick={toggle} className='card'>
      <img className='img-back' src={visible ? front : back}></img>
    </article>
  )
}

export default CardGame