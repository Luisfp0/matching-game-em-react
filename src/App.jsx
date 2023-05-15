import { useState } from 'react'
import BoardGame from './components/BoardGame/index.jsx'
import ScoreBoard from './components/ScoreBoard/index.jsx'

function App() {
  const [currentPlayer, setCurrentPlayer] = useState(1)
  const [playerOne, setPlayerOne] = useState(0)
  const [playerTwo, setPlayerTwo] = useState(0)
  function playerOneScored() {
    setPlayerOne(playerOne + 1)
  }

  function playerTwoScored() {
    setPlayerTwo(playerTwo + 1)
  }
  
  return (
    <>
      <ScoreBoard setCurrentPlayer={setCurrentPlayer} currentPlayer={currentPlayer} playerOne={playerOne} playerTwo={playerTwo}/>
      <BoardGame setCurrentPlayer={setCurrentPlayer} currentPlayer={currentPlayer} playerOneScored={playerOneScored} playerTwoScored={playerTwoScored}/>
    </>
  )
}

export default App
