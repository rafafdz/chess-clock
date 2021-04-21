import { IoSettingsSharp } from "react-icons/io5"

const Config = ({ onClick }) => {
    return (
        <div className="button config-button" onClick={onClick}>
            <IoSettingsSharp />
        </div>
    )
}

export default Config
