import { IoPauseCircle, IoPlayCircle } from "react-icons/io5"

const ButtonContainer = ({children}) => {
    return (
        <div className='pause-container'>
            <div className="pause-button">
                {children}
            </div>
        </div>
    )
}




const PlayPause = ({paused, onClick}) => {

    if (paused){
        return (
            <ButtonContainer>
                <IoPlayCircle onClick={onClick} className="icon" />
            </ButtonContainer>

        )}

    return (
        <ButtonContainer>
            <IoPauseCircle onClick={onClick} className="icon" />
        </ButtonContainer>
    )
}

export default PlayPause