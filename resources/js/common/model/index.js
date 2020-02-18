import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types'

const propTypes = {
  toggle: PropTypes.bool, 
  modal: PropTypes.bool, 
  handleRemove: PropTypes.func,
}


const ModalExample = ({ props, handleRemove,open,id}) => {
 
  const [modal, setModal] = useState(open); 
  const toggle = () => setModal(!modal);
   return (
    <div>
      {/* <Button color="danger" onClick={toggle}>{'buttonLabel'}</Button> */}
      <Modal isOpen={modal} toggle={toggle} className={'className'}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter> 
          <Button color="primary"  
             onClick={() => handleRemove(id)}
          >Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
ModalExample.propTypes = propTypes
export default ModalExample;