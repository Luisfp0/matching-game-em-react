import './style.css'

function Player(props) {
  
  return (
    <div className={props.className}>{props.name}</div>
  )
}

export default Player