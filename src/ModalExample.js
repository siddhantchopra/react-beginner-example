import React, {useState} from 'react'
import {Modal} from './Modal'

const BUTTON_WRAPPER_STYLE = {
    position: 'relative',
    zIndex: 1
}

const OTHER_CONTENT_STYLE = {
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'chartreuse',
    padding: '10px'
}
const ModalExample = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (<>
        <div style={BUTTON_WRAPPER_STYLE} className="container">
            <button onClick={() => setIsOpen(true)}>
                Open Modal
                 </button>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <p>Fancy Modal</p>
                 </Modal>
        </div>

        <div style={OTHER_CONTENT_STYLE} className="container">
            Other Content
             </div>
    </>

    )
}

export default ModalExample
