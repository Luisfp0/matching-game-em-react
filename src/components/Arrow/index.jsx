import './style.css'


function Arrow(props) {
  const player = props.currentPlayer === 1 
    ? 'player-one' 
    : 'player-two'
  return (
    <div className='containerArrow'>
      <img
        className={`arrowDown ${player}`} 
        src='../../public/Images/arrowDown.svg'>
      </img>
    </div>
  )
}

export default Arrow