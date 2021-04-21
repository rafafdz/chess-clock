import logo from './logo.svg';
import Clock from './components/Clock'
import { IoPauseCircle } from "react-icons/io5"
import { useState } from 'react'

import './App.css';

const App = () => {

  const [initialTime, setInitialTime] = useState(600)
  const [playerOneTurn, setPlayerOneTurn] = useState(true)


  const switchPlayers = () => {
    setPlayerOneTurn((currentPlayerOne) => !currentPlayerOne)
  }

  return (
    <div className="app-container">
      <Clock  
        turn={playerOneTurn} 
        isPlayerOne={true}
        initialTime={initialTime}
        switchPlayers={switchPlayers}
      />
      <div className='pause-container'>
        <div className="pause-button">
          <IoPauseCircle className="icon"/>
        </div>
      </div>

      <Clock 
       turn={!playerOneTurn} 
       isPlayerOne={false}
       initialTime={initialTime}
       switchPlayers={switchPlayers}
       />
    </div>
  );
}

export default App;