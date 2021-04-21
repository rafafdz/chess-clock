import { IoPause, IoPlay } from "react-icons/io5"


const PlayPause = ({paused, onClick}) => {

    let icon = paused ? <IoPlay /> : <IoPause />
    return (
        <div className="button play-pause-button" onClick={onClick}>
            {icon}
        </div>
    )
}

export default PlayPause