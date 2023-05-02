import { useState } from 'react'
import BoardGame from './components/BoardGame/index.jsx'
import ScoreBoard from './components/ScoreBoard/index.jsx'

function App() {

  return ( 
    <>
      <ScoreBoard/>
      <BoardGame/>
    </>
  )
}

export default App
