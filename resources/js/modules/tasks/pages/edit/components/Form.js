import React from 'react'
import PropTypes from 'prop-types'
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem"; 
import MyEditor from '../../../../../common/wysiwyg-editor/index'

const displayName = 'TaskFrom'
const propTypes = {
  task: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ dataList, task, errors, onChange, onSubmit }) => {
 
 
  function handleChange(name, value) {
 

    if (value !== task[name]) {
      onChange(name, value);
    }
  }
 
  return <form onSubmit={e => onSubmit(e)}>
    <div className="form-group row">
      <label htmlFor="title" className="col-md-12 col-form-label">
        Task Name
        </label>
      <div className="col-md-12">
        <input
          type="text"
          id="taskName"
          name="taskName"
          className={`form-control ${errors.has("taskName") &&
            "is-invalid"}`}
          placeholder="Task Name"
          value={task.taskName || ""}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        {errors.has("taskName") && (
          <div className="invalid-feedback">
            {errors.first("taskName")}
          </div>
        )}
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="description" className="col-md-12 col-form-label">
        Task Description
        </label>
      <div className="col-md-12"> 
        <MyEditor id="taskDescription" value={task.taskDescription} onChange={e => handleChange('taskDescription', e)} />  
        {errors.has("taskDescription") && (
          <div className="invalid-feedback">
            {errors.first("taskDescription")}
          </div>
        )}
      </div>
    </div>

    <div className="form-group row">
      <label htmlFor="description" className="col-md-12 col-form-label">
        Task Status
        </label>
      <div className="col-md-12">
        <select
          id="isActive"
          name="isActive"
          className={`form-control ${errors.has("isActive") &&
            "is-invalid"}`}
          placeholder="Task Status"
          onChange={e => handleChange(e.target.name, e.target.value)}
        >
          <option selected={task.isActive == 0 ? "selected" : ""} value="0">In Active</option>
          <option selected={task.isActive == 1 ? "selected" : ""} value="1">Active</option>
     
        </select>
        {errors.has("isActive") && (
          <div className="invalid-feedback">{errors.first("isActive")}</div>
        )}
      </div>
    </div>

    <div className="form-group row">
      <label htmlFor="description" className="col-md-12 col-form-label">
        Course Name
        </label>
      <div className="col-md-12">
        <select
          id="course_id"
          name="course_id"
          className={`form-control ${errors.has("course_id") &&
            "is-invalid"}`}
          placeholder="Course Status"
          onChange={e => handleChange(e.target.name, e.target.value)}
        >
          <option value="">Select Course Name</option>
          {dataList.map(name => (
            <option selected={task.courseName.id == name.id ? "selected" : ""} key={name.id} value={name.id}>
              {name.courseName}
            </option>
          ))}
        </select>
        {errors.has("course_id") && (
          <div className="invalid-feedback">{errors.first("course_id")}</div>
        )}
      </div>
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
