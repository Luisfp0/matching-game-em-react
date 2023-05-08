import { useState } from 'react'
import './style.css'

function  CardGame(props) {
  const back = './Images/alura-pixel.png'
  const front = `./Images/${props.card.figure}.png`
  function toggle() {
    props.onClick(props.card)
  }


  return (
    <article onClick={toggle} className='card'>
      <img className='img-back' src={props.card.visible ? front : back}></img>
    </article>
  )
}

export default CardGame