import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import LoadingComponent from '../loader'
import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
const propTypes = {
  errors: PropTypes.object.isRequired, 
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  opens: PropTypes.boolean,
}



const RejectModel = ({ openModelCan,openCan, loading, course,errors, onChange, onSubmit }) => {
 
 

  function handleChange(name, value) { 
 // console.log(course[name])
    //if (value !== course[name]) {
      onChange(name, value)
  //  }
  }

 


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

  const classes = useStyles();
 
  const [open, setOpen] = React.useState(openCan);
 
  // if (opens === false){
  // //  setOpen(false);
  // }
  // React.useEffect(() => {
  
  // }, [open]);

  


  const handleClose = () => {

    openModelCan()  
    setOpen(false); 
  };

  const handleOpen = () => {
    setOpen(true); 
  };
 

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250
      }
    }
  };

  return (
    <div>


      {/* <Button
        onClick={handleOpen}
        size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
        <i class="fa fa-plus" aria-hidden="true"></i> Assign Course
      </Button > */}
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
              <h2 id="transition-modal-title" className="text-center mb-0">Enter the comment</h2>
            
              <form onSubmit={e => onSubmit(e)}>
                <div className="row">
                  <div className="col-md-12"> 
                  {/* error={errors.has("description")} */}
                    <FormControl className="w-100 mb-3" > 
              
               <TextField
                error={errors.has("description")}
                multiline
                rowsMax="6"
                label="Description"
                defaultValue="description"
               helperText={`${errors.has("description") ? errors.first("description").replace("description", "description") : ''}`}
               value={course.description || ""}
                id="description"
                name="description"
                onChange={e => handleChange(e.target.name, e.target.value)}
              />
 
              {/* {errors.has("description") && (
                        <FormHelperText>{errors.first("description").replace("description",  name  )}</FormHelperText>
                      )}   */}
                    </FormControl>
          
                  </div>
                  {<LoadingComponent isLoading={loading} error={''} />}
                </div>


                <div className="row">
                  <div className="col-md-12 ml-auto">
                    <Button
                      variant="contained"
                     disabled={errors.any()}
                      type="submit"
                      className="text-capitalize colorPrimary"
                      disableElevation
                //   onClick={handleClose}
                    >
                     Submit
                   </Button>
                  </div>
                </div>
              </form>

            </div>
          </div>

        </Fade>
      </Modal>

    </div>
  );
}
RejectModel.propTypes = propTypes
export default RejectModel;