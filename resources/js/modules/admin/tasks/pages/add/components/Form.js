import React from 'react'
import PropTypes from 'prop-types'
import MyEditor from '../../../../../../common/wysiwyg-editor/index'
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const displayName = 'TaskFrom'
const propTypes = {
  task: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const Form = ({ dataList, task, errors, onChange, onSubmit }) => {

 
  function handleChange(name, value) {
 
    if (value !== task[name]) {
      onChange(name, value);
    }
  }
 

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div className="form-group row">
        <label htmlFor="title" className="col-md-12 col-form-label">
          Task Name
        </label>
        <div className="col-md-12">
          <input
            type="text"
            id="task_name"
            name="task_name"
            className={`form-control ${errors.has("task_name") &&
              "is-invalid"}`}
            placeholder="Task Name"
            value={task.task_name || ""}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
          {errors.has("task_name") && (
            <div className="invalid-feedback">
              {errors.first("task_name")}
            </div>
          )}
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="description" className="col-md-12 col-form-label">
          Task Description
        </label>
        <div className="col-md-12">
          <MyEditor id="task_description" value={task.task_description} onChange={e => handleChange('task_description', e)} /> 

          {errors.has("task_description") && (
            <div className="invalid-feedback">
              {errors.first("task_description")}
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
            id="is_active"
            name="is_active"
            className={`form-control ${errors.has("is_active") &&
              "is-invalid"}`}
            placeholder="Task Status"
            onChange={e => handleChange(e.target.name, e.target.value)}
          >
            <option value="0">In Active</option>
            <option value="1">Active</option>
          </select>
          {errors.has("is_active") && (
            <div className="invalid-feedback">{errors.first("is_active")}</div>
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
              <option key={name.id} value={name.id}>
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
          <button
            disabled={errors.any()}
            type="submit"
            className="btn btn-primary"
          >
           <i class="fa fa-plus" aria-hidden="true"></i>  Add a Task
          </button>
        </div>
      </div>
    </form>
  );
};

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
