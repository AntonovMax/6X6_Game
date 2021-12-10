import { useState, useEffect } from 'react'

import Cell from '../Cell/Cell'
import style from './GameField.module.css'

function GameField({ game_arr }) {

  const [paire, setPaire] = useState([])

  const openCell = (event) => {
    if (paire.length > 0 && paire[0] != event.target.id) {
      const color = event.target.id.match(/[a-z]/gi).join('') // матчим цвет из id
      event.target.style.backgroundColor = event.target.id.match(/[a-z]/gi).join('')
      setPaire([...paire, event.target.id])
    } else if (paire.length === 0) {
      const color = event.target.id.match(/[a-z]/gi).join('') // матчим цвет из id
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




        if (paire[0] === paire[1]) {
          for (let i = 0; i < 2; i++) {
            const cell = document.getElementById(paire[i])

            cell.style.backgroundColor = 'red'
            cell.removeEventListener('click', (event) => openCell(event))
          }
        } else if (paire[0].match(/[a-z]/gi).join('') != paire[1].match(/[a-z]/gi).join('')) {
          for (let i = 0; i < 2; i++) {
            const cell = document.getElementById(paire[i])

            cell.style.backgroundColor = 'white'
            cell.removeEventListener('click', (event) => openCell(event))
          }
        }

        setPaire([])
      }
    }, 1000)

  }, [paire])


  return (
    <div className={style.wrapper}>
      {game_arr.map((el, index) => {
        return (
          <Cell el={el} key={index} index={index} openCell={openCell} />
        )
      })}
    </div>
  );
}

export default GameField;
