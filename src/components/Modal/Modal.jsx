import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import { useEffect } from 'react';
import './Modal.scss'

const Modal = ({id, active,children,...props} )=> {
    const [activeModal, setActiveModal] = useState(false)

    useEffect(() => {
        setActiveModal(active)

    }, [active])

    const closeModal = () => {
        setActiveModal(false)
    }
    if(activeModal){
        return(
            <div id={id} className="modal">
                <div className="modal__content">
                {children}
                <div className="modal__close" onClick={closeModal}>
                    <i className="bx bx-x"></i>
                </div>
            </div>
            </div>
        )
    }
    else{
        return null
    }
}

Modal.propTypes = {
    id:PropTypes.string,
    active: PropTypes.bool
}


export default Modal
