import style from './Cell.module.css'

function Cell({ el, index, openCell }) {
  return (
    <div onClick={(event) => openCell(event)}
      className={`${style.cell} ${el}`}
      key={index}
      id={`${index}${el}`}>
    </div>
  );
}

export default Cell;
