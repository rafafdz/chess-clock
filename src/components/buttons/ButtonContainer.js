import Config from "./Config"
import PlayPause from "./PlayPause"
import Reset from "./Reset"

const ButtonContainer = ({paused, onClickPlayPause, onClickSettings, onClickReset}) => {
    return (
        <div className='button-container'>
            <Config onClick={onClickSettings} />
            <div className='spacer'></div>
            <PlayPause onClick={onClickPlayPause} paused={paused}/>
            <div className='spacer'></div>
            <Reset onClick={onClickReset}/>
        </div>
    )
}

export default ButtonContainer
