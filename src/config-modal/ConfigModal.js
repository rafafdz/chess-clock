import CloseButton from "./CloseButton"

const ConfigModal = ({setActive, initialTime}) => {
    return (
        <div className={`modal-base`}> 
            <div className="config-window">
                <CloseButton onClick={() => setActive(false) }/>
            </div>
        </div>
    )
}

export default ConfigModal
