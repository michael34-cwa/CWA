import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import LoadingComponent from '../../common/loader'
import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
const propTypes = {
  handleRemove: PropTypes.func,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  opens: PropTypes.boolean,
}



const AssignModel = ({ opens,loading,courses, errors, onChange, onSubmit }) => {
 

  const [personName, setPersonName] = React.useState([]);

  function handleChange(name, value) { 
    setPersonName(value); 
    onChange(name, value); 
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
 
  const [open, setOpen] = React.useState(opens);
 
  // if (opens === false){
  // //  setOpen(false);
  // }
  // React.useEffect(() => {
  
  // }, [open]);



  const handleClose = () => {
    setOpen(false);
    setPersonName([]);
  };

  const handleOpen = () => {
    setOpen(true);
    setPersonName([]);
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


      <Button
        onClick={handleOpen}
        size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
        <i class="fa fa-plus" aria-hidden="true"></i> Assign Course
      </Button >
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
              <h2 id="transition-modal-title" className="text-center mb-0">Select The Courses</h2>

              <form onSubmit={e => onSubmit(e)}>
                <div className="row">
                  <div className="col-md-12">
                    <FormControl className="w-100 mb-3" error={errors.has("course_name")}> 
                      <InputLabel id="course_name">Course List</InputLabel>
                      <Select
                        labelId="course_name"
                        className={`${errors.has("course_name") && "is-invalid"}`}
                        id="course_name"
                        multiple
                        value={personName}
                        name="course_name"
                        onChange={e => handleChange(e.target.name, e.target.value)}
                        MenuProps={MenuProps}
                      >
                        {courses.map(name => (
                          <MenuItem key={name.id} value={name.id}>
                            {name.courseName}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.has("course_name") && (
                        <FormHelperText>{errors.first("course_name").replace("course_name", "course")}</FormHelperText>
                      )}
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
                      <i className="fa fa-plus mr-2" aria-hidden="true"></i>  Add Course
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
AssignModel.propTypes = propTypes
export default AssignModel;