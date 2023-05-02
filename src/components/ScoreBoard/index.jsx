import './style.css';
import Player from '../PlayerName';
import PlayerScore from '../PlayerScore';

function ScoreBoard() {

  return (
    <div className='scoreBoard'>
      <Player className='player1' name='Player 1'/>
      <PlayerScore />
      <span className='vs'>vs</span>
      <PlayerScore />
      <Player className='player2' name='Player 2'/>
    </div>
  )
}

export default ScoreBoard