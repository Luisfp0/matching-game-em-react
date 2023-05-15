import './style.css';
import Player from '../PlayerName';
import PlayerScore from '../PlayerScore';
import Arrow from '../Arrow';

function ScoreBoard(props) {
  return (
    <div className='scoreBoard'>
      <Arrow currentPlayer={props.currentPlayer}></Arrow>
      <Player className='player1' name='Player1'/>
      <PlayerScore points={props.playerOne} className='scorePlayer1 container-score'/>
      <span className='vs'>vs</span>
      <PlayerScore points={props.playerTwo} className='scorePlayer2 container-score'/>
      <Player className='player2' name='Player2'/>
    </div>
  )
}

export default ScoreBoard