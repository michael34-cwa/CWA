import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import LoadingComponent from '../loader'
import { toast } from "react-toastify";

import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
const propTypes = {
  handleRemove: PropTypes.func,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
 }



const GroupModel = ({ openModelAss, name,openAss, loading,modelData, course,task,errors, onChange, onSubmit }) => {
 
 
  const [personName, setPersonName] = React.useState([]);


  function handleChange(name, value) { 
    if(name == 'name'){
    if(value.length >= 3){ 
      toast.success("Please select not more then 2 students"); 
    }else{
    setPersonName(value); 
    }
  }
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
 
  const [open, setOpen] = React.useState(openAss);
 
  // if (opens === false){
  // //  setOpen(false);
  // }
  // React.useEffect(() => {
  
  // }, [open]);

  


  const handleClose = () => {

    openModelAss()  
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
              <h3 id="transition-modal-title" className="text-center mb-0 blue-txt">Select The Course</h3>
            
              <form onSubmit={e => onSubmit(e)}>
                <div className="row">
                  <div className="col-md-12">

                  <FormControl className="w-100 mb-3" error={errors.has("course_name")}> 
                      <InputLabel id="course_name">Course List</InputLabel>
                      <Select
                        labelId="course_name"
                        className={`${errors.has("course_name") && "is-invalid"}`}
                        id="course_name" 
                        //  value={personName}
 
                        name="course_name"
                        onChange={e => handleChange(e.target.name, e.target.value)}
                      //  MenuProps={MenuProps}
                      >
                        {course.map(name => (
                          <MenuItem key={name.courseId} value={name.courseId}>
                            {name.course_name}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.has("course_name") && (
                        <FormHelperText>{errors.first("course_name").replace("course_name",  'Course'  )}</FormHelperText>
                      )}
                    </FormControl>


                    <FormControl className="w-100 mb-3" error={errors.has("task_name")}> 
                      <InputLabel id="task_name">Task List</InputLabel>
                      <Select
                        labelId="course_name"
                        className={`${errors.has("task_name") && "is-invalid"}`}
                        id="task_name" 
                        //  value={personName}
 
                        name="task_name"
                        onChange={e => handleChange(e.target.name, e.target.value)}
                      //  MenuProps={MenuProps}
                      >
                        {task.map(name => (
                          <MenuItem key={name.taskId} value={name.taskId}>
                            {name.task_name}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.has("task_name") && (
                        <FormHelperText>{errors.first("task_name").replace("task_name",  'Task'  )}</FormHelperText>
                      )}
                    </FormControl>

                    <FormControl className="w-100 mb-3" error={errors.has("name")}> 
                      <InputLabel id="name">{name} List</InputLabel>
                      <Select
                        labelId="name"
                        className={`${errors.has("name") && "is-invalid"}`}
                        id="name" 
                         value={personName}
                        multiple

                        name="name"
                        onChange={e => handleChange(e.target.name, e.target.value)}
                       MenuProps={MenuProps}
                      >
                        {modelData.map(name => (
                          <MenuItem key={name.useId} value={name.useId}>
                            {name.name}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.has("name") && (
                        <FormHelperText>{errors.first("name").replace("name",  name  )}</FormHelperText>
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
                      <i className="fa fa-plus mr-2" aria-hidden="true"></i>  Add {name}
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
GroupModel.propTypes = propTypes
export default GroupModel;