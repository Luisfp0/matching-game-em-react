import './style.css';
import Player from '../PlayerName';

function ScoreBoard() {

  return (
    <div className='scoreBoard'>
      <Player name='Player 1'/>
      <Player name='Player 2'/>
    </div>
  )
}

export default ScoreBoard