import React from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

const Modal = ({id, active,children,closeModal,...props} )=> {
    if(active){
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
    active: PropTypes.bool,
    closeModal:PropTypes.func
}


export default Modal
