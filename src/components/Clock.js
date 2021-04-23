import { useEffect } from 'react'


const Seconds = ({ seconds }) => {

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const pretty_secs = secs < 10 ? '0' + secs : secs

    return (
        <span className="seconds">{`${minutes}:${pretty_secs}`}</span>
    )
}

const Decimals = ({ decimals }) => {
    return (
        <span className="decimals">{decimals}</span>
    )
}


const Clock = ({ isPlayerOne, turn, switchPlayers, time, setTime, paused }) => {

    const getSeconds = () => {
        return Math.floor(time / 10)
    }

    const getDecimals = () => {
        return time % 10
    }

    const clickHandler = () => {
        if (turn && !paused) switchPlayers();
    }


    const decrementTime = () => {
        setTime((prevTime) => {
            if (prevTime <= 0) return 0
            return prevTime - 1
        })
    }

    useEffect(() => {

        let interval;
        if (turn && !paused && time > 0) {
            interval = setInterval(decrementTime, 100)
        }
        return () => {
            if (turn) clearInterval(interval)
        }
    }, [turn, paused])

    return (
        <div className={`clock ${isPlayerOne ? 'player-one' : 'player-two'} ${turn && !paused ? 'active' : ''}`}
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
