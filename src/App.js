import './App.css';
import GameField from './Components/GameField/GameField';

import { generateField } from './utils/game_field_generator'

function App() {

  const game_arr = generateField(6)
  console.log('App');
  return (
    <div className="App">
     <GameField game_arr={game_arr}/>
    </div>
  );
}

export default App;
