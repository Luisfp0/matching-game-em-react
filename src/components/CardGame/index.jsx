import { useState } from 'react'
import './style.css'

let firstCard
let secondCard
let clickScreen = 0
function CardGame(props) {
  const back = './Images/alura-pixel.png'
  const front = `./Images/${props.figure}.png`
  const [visible, setVisible] = useState(false)
  
  function toggle() {
    setVisible(!visible)
    clickScreen++
    if(clickScreen === 1) {
      firstCard = props.figure
      console.log('primeira',firstCard)
    } else {
      secondCard = props.figure
      console.log('segunda', secondCard)
    }
  }
  
  if(clickScreen === 2) {
    if(firstCard === secondCard) {
      console.log("permanece virada")
      clickScreen = 0
      firstCard = 1
      secondCard = 2
    } else {
      console.log("Desvira")
      clickScreen = 0
      firstCard = 1
      secondCard = 2

    }
  }
  




  return (
    <article onClick={toggle} className='card'>
      <img className='img-back' src={visible ? front : back}></img>
    </article>
  )
}

export default CardGame