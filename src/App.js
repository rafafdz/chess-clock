import logo from './logo.svg';
import Clock from './components/Clock'
import PlayPause from './components/PlayPause'
import { useState } from 'react'

import './App.css';

const App = () => {

  const [initialTime, setInitialTime] = useState(600)
  const [playerOneTurn, setPlayerOneTurn] = useState(true)
  const [paused, setPaused] = useState(true)


  const switchPlayers = () => {
    setPlayerOneTurn((currentPlayerOne) => !currentPlayerOne)
  }

  const onClickPlayPause = () =>{
    setPaused(!paused)
  }

  return (
    <div className="app-container">
      <Clock  
        turn={playerOneTurn} 
        isPlayerOne={true}
        initialTime={initialTime}
        switchPlayers={switchPlayers}
        paused={paused}
        
      />
      
      <PlayPause
        paused={paused}
        onClick={onClickPlayPause}
      />

      <Clock 
       turn={!playerOneTurn} 
       isPlayerOne={false}
       initialTime={initialTime}
       switchPlayers={switchPlayers}
       paused={paused}
       />
    </div>
  );
}

export default App;