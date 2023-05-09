import './style.css';
import Player from '../PlayerName';
import PlayerScore from '../PlayerScore';
import Arrow from '../Arrow';

function ScoreBoard() {

  return (
    <div className='scoreBoard'>
      <Arrow></Arrow>
      <Player className='player1' name='Player1'/>
      <PlayerScore />
      <span className='vs'>vs</span>
      <PlayerScore />
      <Player className='player2' name='Player2'/>
    </div>
  )
}

export default ScoreBoard