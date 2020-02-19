import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const propTypes = {
  toggle: PropTypes.bool,
  modal: PropTypes.bool,
  handleRemove: PropTypes.func,
}

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


const DeleteModel = ({ openModel,opens,handleRemove, id }) => {
 
  const classes = useStyles();
  const [open, setOpen] = React.useState(opens); 

  
  const handleClose = () => {  
    setOpen(false);
    openModel(); 
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p> 
            <button color="primary"
              onClick={() => handleRemove(id)}
            >Delete</button>
              <button type="button" onClick={handleClose}>
                Close
               </button>
          </div>
          
        </Fade>
      </Modal>
    </div>
  );
}
DeleteModel.propTypes = propTypes
export default DeleteModel;