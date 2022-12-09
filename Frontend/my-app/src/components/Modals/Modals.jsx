import React from 'react'
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal'
import Modal from '../Modals/Modal'


export const Modals = () => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <div>
        <button className='buttonAgregar' onClick={openModal} ></button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <p className='pModals' style={{ color: 'black'}}>¿Desea crear un Momento Destacado?</p>
            <Link to='/load'><button className='btnCli'>Historia clinica</button>
            </Link>
            <button className='btnEdu'>Ciclo lectivo</button>
        </Modal>
            
        
        
    </div>
  )
}

export default Modals
