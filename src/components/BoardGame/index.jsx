import './style.css';
import CardGame from '../CardGame';
import { useState } from 'react';

const CARDS = [
  {
    id: 1,
    figure: 'html',
    player: null,
    visible: false
  },
  {
    id: 2,
    figure: 'html',
    player: null,
    visible: false
  },
  {
    id: 3,
    figure: 'css',
    player: null,
    visible: false
  },
  {
    id: 4,
    figure: 'css',
    player: null,
    visible: false
  },
  {
    id: 5,
    figure: 'javascript',
    player: null,
    visible: false
  },
  {
    id: 6,
    figure: 'javascript',
    player: null,
    visible: false
  }
]

const RANDOM_CARDS = CARDS.sort(() => 0.5 - Math.random())

function BoardGame() {
  const [cards, setCards] = useState(RANDOM_CARDS)
  const [waitingCard, setWaitingCard] = useState(null)

  function toggleCardVisible(card) {
    const newCards = cards.map((c) => {
      if(c.id === card.id) {
        c.visible = !c.visible
        return c
      }
      return c
    })
    setCards(newCards)
  }

  function playingRound(card) {
    toggleCardVisible(card)
    if(waitingCard === null) {
      setWaitingCard(card)
      console.log("Usestate",card)
      return
    }
    if(waitingCard.figure === card.figure) {
      console.log("Iguais")
      setWaitingCard(null)
    } else {
      setTimeout(() => {
        toggleCardVisible(card)
        toggleCardVisible(waitingCard)
      },500)

      setWaitingCard(null)
    }
  }

  return (
    <div className='boardGame'>
      {
        cards
          .map((card) => <CardGame onClick={playingRound} card={card}/>)
      }
    </div>
  )
}

export default BoardGame