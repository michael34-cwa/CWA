import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'; 
import MyEditor from '../../../../../../common/wysiwyg-editor/index'
import LoadingComponent from '../../../../../../common/loader'
const displayName = 'TaskFrom'
const propTypes = {
  task: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ loading,dataList, task, errors, onChange, onSubmit }) => {
 
  console.log(task);
  function handleChange(name, value) {
 

    if (value !== task[name]) {
      onChange(name, value);
    }
  }
 
  return <form onSubmit={e => onSubmit(e)}>

    <div className="row">
      <div className="col-md-12">
        <FormControl className="w-100 mb-3" >
          <TextField
            error={errors.has("taskName")}

            label="Task Name"
            defaultValue="Task Name"
            helperText={`${errors.has("taskName") ? errors.first("taskName").replace("_", " ") : ''}`}
            value={task.taskName || ""}
            id="taskName"
            name="taskName"
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>


      </div>
    </div>


    <div className="mb-3">
      <label htmlFor="title">Task Description</label>
      <div className="editor-wrap p-2">
        <MyEditor id="taskDescription" name="taskDescription" value={task.taskDescription || ""} onChange={e => handleChange('taskDescription', e)} />

      </div>
      {errors.has("taskDescription") && (
        <div className="MuiFormHelperText-root Mui-error"> {errors.first("taskDescription").replace("_", " ")} </div>
      )}
    </div>

    <div className="row">
      <div className="col-md-6">
        <FormControl className="w-100 mb-3" error={errors.has("isActive")}>
          <InputLabel id="isActive"> Task Status</InputLabel>
          <Select
            labelId="isActive"
            id="isActive"
            name="isActive"
            placeholder="Task Status"
            value={task.isActive}
            onChange={e => handleChange(e.target.name, e.target.value)}
          >
            <MenuItem   value={0}>In Active</MenuItem>
            <MenuItem   value={1}>Active</MenuItem>
          </Select>
          {errors.has("isActive") && (
            <FormHelperText>{errors.first("isActive").replace("isActive", "task status")}</FormHelperText>
          )}
        </FormControl>
      </div>


      <div className="col-md-6">
        <FormControl className="w-100 mb-3" error={errors.has("courseId")}>
          <InputLabel id="courseId">Course Name</InputLabel>
          <Select
            labelId="courseId"
            className={`${errors.has("courseId") && "is-invalid"}`}
            id="courseId"
            name="courseId"
            value={task.courseId}
            placeholder="Course Name"
            onChange={e => handleChange(e.target.name, e.target.value)}
          >
            {dataList.map(name => (
              <MenuItem key={name.id} value={name.id}>
                {name.courseName}
              </MenuItem>
            ))}
          </Select>
          {errors.has("courseId") && (
            <FormHelperText>{errors.first("courseId").replace("courseId", "course name")}</FormHelperText>
          )}
        </FormControl>
      </div>
      {<LoadingComponent isLoading={loading} error={''} />}
    </div>
 
 

     
    <div className="form-group row">
      <div className="col-md-12 ml-auto">
        <button disabled={errors.any()} type="submit" className="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Update Courses</button>
      </div>
    </div>
  </form>
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
