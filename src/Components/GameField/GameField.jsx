import { useState, useEffect } from 'react'

import Cell from '../Cell/Cell'
import style from './GameField.module.css'

function GameField({ game_arr }) {

  const [paire, setPaire] = useState([])
  const [cells, setCells] = useState(game_arr)

  console.log('GameField');

  function openCell (event) {
    if (paire.length > 0 && paire[0] != event.target.id) {
      event.target.style.backgroundColor = event.target.id.match(/[a-z]/gi).join('')
      setPaire([...paire, event.target.id])
    } else if (paire.length === 0) {
      event.target.style.backgroundColor = event.target.id.match(/[a-z]/gi).join('')
      setPaire([...paire, event.target.id])
    }

  }

  useEffect(() => {

    setTimeout(() => {
      
      if (paire.length === 2) {
        console.log(paire)
        // const cellOne = document.getElementById(paire[0])
        // const cellTwe = document.getElementById(paire[1])




        if (paire[0].match(/[a-z]/gi).join('') === paire[1].match(/[a-z]/gi).join('')) {
          for (let i = 0; i < 2; i++) {
            const cell = document.getElementById(paire[i])
          
            cell.style.backgroundColor = 'transparent'
            cell.style.border = '1px solid transparent'
            
          }
        } else if (paire[0].match(/[a-z]/gi).join('') != paire[1].match(/[a-z]/gi).join('')) {
          for (let i = 0; i < 2; i++) {
            const cell = document.getElementById(paire[i])

            cell.style.backgroundColor = 'white'
          }
        }

        setPaire([])
      }
    }, 1000)

  }, [paire])


  return (
    <div className={style.wrapper}>
      {cells.map((el, index) => {
        return (
          <Cell el={el} key={index} index={index} openCell={openCell} />
        )
      })}
    </div>
  );
}

export default GameField;
