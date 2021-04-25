import Clock from './components/Clock'
import { useEffect, useState } from 'react'
import ButtonContainer from './components/buttons/ButtonContainer'
import { Howl } from 'howler'
import switch_audio from './audios/switch.wav'
import './App.css';
import ConfigModal from './config-modal/ConfigModal'

const App = () => {

  const [initialTime, setInitialTime] = useState(9000)
  const [playerOneTurn, setPlayerOneTurn] = useState(true)
  const [paused, setPaused] = useState(true)
  const [timeOne, setTimeOne] = useState(initialTime)
  const [timeTwo, setTimeTwo] = useState(initialTime)

  const [settingsActive, setSettingsActive] = useState(false)

  const [audio, setAudio] = useState(new Howl({src: switch_audio, volume: 0.7}))

  useEffect(() => {
    // audio.volume = 0.7

    if ('wakeLock' in navigator) {
      console.log('wakelock in navigator!')
      navigator.wakeLock.request('screen')
        .then(() => console.log('Wakelock acquired'))
        .catch((err) => console.log(err))
    }
  }, [])
  


  const switchPlayers = () => {
    setPlayerOneTurn((currentPlayerOne) => !currentPlayerOne)
    audio.play()
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
    setPlayerOneTurn(true)
    setTimeOne(initialTime)
    setTimeTwo(initialTime)
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
        turn={!playerOneTurn}
        isPlayerOne={false}
        time={timeTwo}
        setTime={setTimeTwo}
        initialTime={initialTime}
        switchPlayers={switchPlayers}
        paused={paused}
      />
      
      <ButtonContainer
        paused={paused}
        onClickSettings={onClickSettings}
        onClickPlayPause={onClickPlayPause}
        onClickReset={onClickReset}
      />

      <Clock
        turn={playerOneTurn}
        isPlayerOne={true}
        time={timeOne}
        setTime={setTimeOne}
        switchPlayers={switchPlayers}
        paused={paused}
      />

    </div>
  );
}

export default App;