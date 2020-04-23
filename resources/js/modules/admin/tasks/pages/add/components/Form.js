import React from 'react'
import PropTypes from 'prop-types'
import MyEditor from '../../../../../../common/wysiwyg-editor/index'
import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import LoadingComponent from '../../../../../../common/loader'

const displayName = 'TaskFrom'
const propTypes = {
  task: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const Form = ({ loading,dataList,types, task, errors, onChange, onSubmit }) => {

 
  function handleChange(name, value) {
 
    if (value !== task[name]) {
      onChange(name, value);
    }
  }
  
 
  return (
    <form onSubmit={e => onSubmit(e)}>

      <div className="row">
        <div className="col-md-12">
          <FormControl className="w-100 mb-3" >
            <TextField
              error={errors.has("task_name")}

              label="Task Name"
              defaultValue="Task Name"
              helperText={`${errors.has("task_name") ? errors.first("task_name").replace("_", " ") : ''}`}
              value={task.task_name || ""}
              id="task_name"
              name="task_name"
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>


        </div>
      </div>
 
      <div className="mb-3">
        <label htmlFor="title">Task Description</label>
        <div className="editor-wrap p-2">
          <MyEditor id="task_description" name="task_description" value={task.task_description || ""} onChange={e => handleChange('task_description', e)} />

        </div>
        {errors.has("task_description") && (
          <div className="MuiFormHelperText-root Mui-error"> {errors.first("task_description").replace("_", " ")} </div>
        )}
      </div>
 
      <div className="row">
      <div className="col-md-6">
        <FormControl className="w-100 mb-3" error={errors.has("is_active")}>
          <InputLabel id="is_active"> Task Status</InputLabel>
          <Select
            labelId="is_active"
            id="is_active"
            name="is_active" 
            placeholder="Task Status"
            onChange={e => handleChange(e.target.name, e.target.value)}
          >
            <MenuItem value={0}>In Active</MenuItem>
            <MenuItem value={1}>Active</MenuItem>
          </Select>
          {errors.has("is_active") && (
            <FormHelperText>{errors.first("is_active").replace("is_active", "task status")}</FormHelperText>
          )}
        </FormControl>
      </div>
 
        <div className="col-md-6">
          <FormControl className="w-100 mb-3" error={errors.has("course_id")}>
            <InputLabel id="course_id">Course Name</InputLabel>
            <Select
              labelId="course_id"
              className={`${errors.has("course_id") && "is-invalid"}`}
              id="course_id" 
              name="course_id"
              placeholder="Course Name"
              onChange={e => handleChange(e.target.name, e.target.value)} 
            >
              {dataList.map(name => (
                <MenuItem key={name.id} value={name.id}>
                  {name.courseName}
                </MenuItem>
              ))}
            </Select>
            {errors.has("course_id") && (
              <FormHelperText>{errors.first("course_id").replace("course_id", "course name")}</FormHelperText>
            )}
          </FormControl>
        </div>
        {<LoadingComponent isLoading={loading} error={''} />}
      </div>

  {  types == 1 ? <div className="row">
        <div className="col-md-12">
          <FormControl className="w-100 mb-3" >
            <TextField
            //  error={errors.has("link")}

              label="Youtbe Link"
           //   defaultValue="Youtbe Link"
            //  helperText={`${errors.has("link") ? errors.first("link").replace("link", "link") : ''}`}
             // value={task.task_name || ""}
              id="link"
              name="link"
              onChange={e => handleChange(e.target.name, e.target.value)}
            />
          </FormControl>


        </div>
            </div> : "" }


      <div className="form-group row">
        <div className="col-md-12 ml-auto">
        <Button 
            variant="contained" 
            disabled={errors.any()}
            type="submit"
            className="text-capitalize colorPrimary"
            disableElevation
          >
            <i className="fa fa-plus mr-2" aria-hidden="true"></i>   Add a Task
          </Button>
          
     
        </div>
      </div>
    </form>
  );
};

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
