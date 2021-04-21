import { IoRefresh } from "react-icons/io5"

const Reset = ({onClick}) => {
    return (
        <div className="button reset-button" onClick={onClick}>
            <IoRefresh  />
        </div>
    )
}

export default Reset
