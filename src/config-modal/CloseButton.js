import { IoClose } from "react-icons/io5"

const CloseButton = ({ onClick }) => {
    return (
        <div className="close-config-button" onClick={onClick}>
            <IoClose />
        </div>
    )
}

export default CloseButton
