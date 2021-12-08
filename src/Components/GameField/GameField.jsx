import { generateField } from '../../utils/game_field_generator'
import Cell from '../Cell/Cell'
import style from './GameField.module.css'

function GameField({ game_arr}) {

  const openCell = (event) => {
    const color = event.target.id.match(/[a-z]/gi).join('') // матчим цвет из id
    event.target.style.backgroundColor = event.target.id.match(/[a-z]/gi).join('')
    event.target.classList.add('open')
  }

  return (
    <div className={style.wrapper}>
      {game_arr.map((el, index) => {
        return (
          <Cell el={el} index={index} openCell={openCell}/>
        )
      })}
    </div>
  );
}

export default GameField;
