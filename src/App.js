import logo from './logo.svg';
import Clock from './components/Clock'
import PlayPause from './components/buttons/PlayPause'
import { useState } from 'react'
import ButtonContainer from './components/buttons/ButtonContainer';

import './App.css';
import ConfigModal from './config-modal/ConfigModal';

const App = () => {

  const [initialTime, setInitialTime] = useState(600)
  const [playerOneTurn, setPlayerOneTurn] = useState(true)
  const [paused, setPaused] = useState(true)
  const [settingsActive, setSettingsActive] = useState(false)
  const [resetClockOne, setResetClockOne] = useState(false)
  const [resetClockTwo, setResetClockTwo] = useState(false)

  const switchPlayers = () => {
    setPlayerOneTurn((currentPlayerOne) => !currentPlayerOne)
  }

  const onClickPlayPause = () =>{
    setPaused(!paused)
  }

  const onClickSettings = () => {
    setPaused(true)
    setSettingsActive(true)
  }

  const onClickReset = () => {
    setPaused(true)
    setResetClockOne(true)
    setResetClockTwo(true)
  }

  let configModal = null
  if (settingsActive){
    configModal = <ConfigModal
      setActive={setSettingsActive}
      initialTime={initialTime}
      setInitialTime={setInitialTime}
    />
  }

  return (
    <div className="app-container">
      { configModal }

      <Clock  
        turn={playerOneTurn} 
        isPlayerOne={true}
        initialTime={initialTime}
        switchPlayers={switchPlayers}
        reset={resetClockOne}
        setReset={setResetClockOne}
        paused={paused}
        
      />
      
      <ButtonContainer
        paused={paused}
        onClickSettings={onClickSettings}
        onClickPlayPause={onClickPlayPause}
        onClickReset={onClickReset}
      />

      <Clock 
       turn={!playerOneTurn} 
       isPlayerOne={false}
       initialTime={initialTime}
       switchPlayers={switchPlayers}
       reset={resetClockTwo}
       setReset={setResetClockTwo}
       paused={paused}
       />
    </div>
  );
}

export default App;