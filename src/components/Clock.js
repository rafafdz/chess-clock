import { useState, useEffect } from 'react'


const Seconds = ({seconds}) => {
    return (
        <span className="seconds">{seconds}</span>
    )
}

const Decimals = ({decimals}) => {
    return (
        <span className="decimals">{decimals}</span>
    )
}


const Clock = ({isPlayerOne, turn, switchPlayers, 
                initialTime, paused, reset, setReset}) => {
    const [timeLeft, setTimeLeft] = useState(initialTime)

    const decrementTime = () => {
        setTimeLeft((prevTime) => prevTime - 1)
    }

    const getSeconds = () => {
        return Math.floor(timeLeft / 10)
    }
    
    const getDecimals = () => {
        return timeLeft % 10
    }

    const clickHandler = () =>{
        if (turn && !paused) switchPlayers();
    }

    useEffect(() => {
        if (reset){
            setTimeLeft(initialTime)
            setReset(false)
        }

        let interval;
        if (turn && !paused) {
            interval = setInterval(decrementTime, 100)
        }
        return () => {
            if (turn) clearInterval(interval)
        }
    }, [turn, paused, reset, setReset, initialTime])

    return (
        <div className={`clock ${isPlayerOne ? 'player-one' : 'player-two'} ${turn ? 'active' : ''}`}
            onClick={clickHandler}
        >
            <p className="clock-text">
                <Seconds seconds={getSeconds()} />
                .
                <Decimals decimals={getDecimals()} />
            </p>
        </div>
    )
}

export default Clock
