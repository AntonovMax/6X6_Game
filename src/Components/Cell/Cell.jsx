import style from './Cell.module.css'

function Cell({ el, index, openCell }) {
  return (
    <div onClick={openCell}
      className={`${style.cell} ${el}`}
      key={index}
      id={`${index}${el}`}>
    </div>
  );
}

export default Cell;
