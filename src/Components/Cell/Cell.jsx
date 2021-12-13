import style from './Cell.module.css'

function Cell({ el, index, openCell }) {

  if (el === 'closed') {
    return (
      <div
      className={`${style.closed}`}
      style={{ 'backgroundColor': 'transparent' }}
      id={`${index}${el}`}>
    </div>
    )
  } else {
    return (
      <div onClick={openCell}
      className={`${style.cell}`}
      id={`${index}${el}`}>
    </div>
    ) 
  }

}

export default Cell;
