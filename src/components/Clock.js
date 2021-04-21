import { useState, useEffect } from 'react'

const Clock = ({isPlayerOne, turn, switchPlayers, initialTime}) => {
    const [timeLeft, setTimeLeft] = useState(initialTime)

    const decrementTime = () => {
        setTimeLeft((prevTime) => prevTime - 1)
    }
    
    const clickHandler = () =>{
        if (turn) switchPlayers();
    }

    useEffect(() => {
        let interval;
        if (turn) {
            interval = setInterval(decrementTime, 1000)
        }
        return () => {
            if (turn) clearInterval(interval)
        }
    }, [turn])

    return (
        <div className={`clock ${isPlayerOne ? 'player-one' : 'player-two'} ${turn ? 'active' : ''}`}
            onClick={clickHandler}
        >
            <p class={`clock-text ${isPlayerOne && 'is-inverted'}`}> 
                { timeLeft }
            </p>
        </div>
    )
}

export default Clock
