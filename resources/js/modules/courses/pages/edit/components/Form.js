import React from 'react'
import PropTypes from 'prop-types'
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem"; 
import MyEditor from '../../../../../common/wysiwyg-editor/index'

const displayName = 'CourseFrom'
const propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ dataList, course, errors, onChange, onSubmit }) => {
 

  const [personName, setPersonName] = React.useState(course.catId.map(catids => catids.id));
  
 
  function handleChange(name, value) {
    if (name === 'catId') {
      setPersonName(value);
    }

    if (value !== course[name]) {
      onChange(name, value);
    }
  }
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
  // console.log(dataList);
  // console.log(course);
 
  return <form onSubmit={e => onSubmit(e)}>
    <div className="form-group row">
      <label htmlFor="title" className="col-md-12 col-form-label">
        Course Name
        </label>
      <div className="col-md-12">
        <input
          type="text"
          id="courseName"
          name="courseName"
          className={`form-control ${errors.has("courseName") &&
            "is-invalid"}`}
          placeholder="Course Name"
          value={course.courseName || ""}
          onChange={e => handleChange(e.target.name, e.target.value)}
        />
        {errors.has("courseName") && (
          <div className="invalid-feedback">
            {errors.first("courseName")}
          </div>
        )}
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="description" className="col-md-12 col-form-label">
        Course Description
        </label>
      <div className="col-md-12"> 
        <MyEditor id="courseDescription" value={course.courseDescription} onChange={e => handleChange('courseDescription', e)} /> 
        {errors.has("courseDescription") && (
          <div className="invalid-feedback">
            {errors.first("courseDescription")}
          </div>
        )}
      </div>
    </div>

    <div className="form-group row">
      <label htmlFor="description" className="col-md-12 col-form-label">
        Course Status
        </label>
      <div className="col-md-12">
        <select
          id="isActive"
          name="isActive"
          className={`form-control ${errors.has("isActive") &&
            "is-invalid"}`}
          placeholder="Course Status"
          onChange={e => handleChange(e.target.name, e.target.value)}
        >
          <option selected={course.isActive == 0 ? "selected": ""} value="0">In Active</option>
          <option selected={course.isActive == 1 ? "selected" : ""} value="1">Active</option>
        </select>
        {errors.has("isActive") && (
          <div className="invalid-feedback">{errors.first("isActive")}</div>
        )}
      </div>
    </div>

    <div className="form-group row">
      <label htmlFor="description" className="col-md-12 col-form-label">
        Course Categorys
        </label>
      <div className="col-md-12">

        <Select
          labelId="demo-mutiple-name-label"
          className={`form-control ${errors.has("catId") &&
            "is-invalid"}`}
          id="catId"
          multiple
          value={personName}
          name="catId"
          onChange={e => handleChange(e.target.name, e.target.value)}
          MenuProps={MenuProps}
        >
          {dataList.map(name => (
            <MenuItem key={name.id} value={name.id}>
              {name.categoryName}
            </MenuItem>
          ))}
        </Select>
        {errors.has("catId") && (
          <div className="invalid-feedback">{errors.first("catId")}</div>
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
