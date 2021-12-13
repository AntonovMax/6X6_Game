import { useState, useEffect } from 'react'

import Cell from '../Cell/Cell'
import style from './GameField.module.css'

function GameField({ game_arr }) { // сгенерированный на верхнем уровне массив случайных цветов передается через пропсы

  const [paire, setPaire] = useState([]) // состояние двух выбранных ячеек
  const [cells, setCells] = useState(game_arr) // изменяемое состояние игрового массива. Отгаданным клеткам присваивается значение 'closed'

  function openCell(event) {
    if (paire.length > 0 && paire[0] != event.target.id) { // если открыта одна ячейка и она не нажата дважды
      event.target.style.backgroundColor = event.target.id.match(/[a-z]/gi).join('') // устанавливаем ее фон, взяв цвет из ID в котором соеденины индекс ячейки в массиве и цвет
      setPaire([...paire, event.target.id])
    } else if (paire.length === 0) { // открытие первой ячейки из пары
      event.target.style.backgroundColor = event.target.id.match(/[a-z]/gi).join('')
      setPaire([...paire, event.target.id])
    }

  }

  useEffect(() => { // хук срабатывает через секунду при каждом изменении массива пар

    setTimeout(() => {

      if (paire.length === 2) { // если в массиве два значения, то происходит проверка
        console.log(paire)

        if (paire[0].match(/[a-z]/gi).join('') === paire[1].match(/[a-z]/gi).join('')) { // если цвета совпадают

          setCells(cells.map((el) => { // находим пару в общем массиве и меняем ее значение на 'closed'
            if ((el === paire[0].match(/[a-z]/gi).join('')) || (el === paire[1].match(/[a-z]/gi).join(''))) {
              return 'closed'
            } else {
              return el
            }
          }))
        } else if (paire[0].match(/[a-z]/gi).join('') != paire[1].match(/[a-z]/gi).join('')) { // если цвета не совпадают, возвращаем клеткам первоначальное значение
          for (let i = 0; i < 2; i++) {
            const cell = document.getElementById(paire[i])
            cell.style.backgroundColor = 'white'
          }
        }

        setPaire([])
      }
    }, 300)

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
