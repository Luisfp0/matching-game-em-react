import './style.css'

function PlayerScore(props) {
  return(
      <ol className={props.className} data-points={props.points}>
        <li className='score-points'>1</li>
        <li className='score-points'>2</li>
        <li className='score-points'>3</li>
      </ol>
  )
}

export default PlayerScore