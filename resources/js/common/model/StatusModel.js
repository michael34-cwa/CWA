import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

 

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    width: '500px',
    padding: theme.spacing(2, 4, 3),

  },
}));


const DeleteModel = ({ openModelAss,openAss, taskId, togglePublish,discription,title }) => {
   const classes = useStyles();
  const [open, setOpen] = React.useState(openAss);


  const handleClose = () => {
    openModelAss()  
    setOpen(false);
  };

  // const handleOpen = () => {
  //   openModelAss(true); 
  // };

  return (
    <div>

      {/* <button
        className="btn btn-danger"
        onClick={handleOpen}
      >
        <i class="fa fa-trash-o" aria-hidden="true"></i>   Delete
                </button> */}
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
            <div className="modal-inner-div" >
              <a className="modalclose" onClick={handleClose}>
                X
               </a>
      <h2 id="transition-modal-title" className="text-center mb-0">{title}</h2>
              <p id="transition-modal-description" className="text-center mt-3 mb-4">{discription}</p>
              <div className="text-center">
                <button type="button" className="btn btn-primary mr-2" onClick={handleClose}>
                  Cancel
               </button>
                <button color="primary" className="btn btn-danger"
              onClick={() => togglePublish(taskId)}
            >Yes</button>
 
              </div>
            </div>
          </div>

        </Fade>
      </Modal>

    </div>
  );
}

export default DeleteModel;