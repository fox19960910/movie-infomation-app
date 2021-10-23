import React, { useRef } from 'react'
import Modal from './Modal';

const ModalTrailer = (props) => {
    
    const { item,active} = props;

   
    return (
       <Modal active={active} id ={`modal-${item.id}`}>
            Modal trailer
       </Modal>
    )
}

export default ModalTrailer
