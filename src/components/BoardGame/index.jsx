import './style.css';
import CardGame from '../CardGame';

function BoardGame() {
  const cards = ['html', 'css', 'javascript','html', 'css', 'javascript']
  return (
    <div className='boardGame'>
      {
        cards
          .sort(() => 0.5 - Math.random())
          .map((v) => <CardGame figure={v}/>)
      }
    </div>
  )
}

export default BoardGame