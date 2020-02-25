import React from 'react'
import PropTypes from 'prop-types'
import MyEditor from '../../../../../../common/wysiwyg-editor/index'
import {TextField , Button , FormHelperText , FormControl , InputLabel , MenuItem , Select} from '@material-ui/core';

const displayName = 'CourseFrom'
const propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const Form = ({ dataList, course, errors, onChange, onSubmit }) => {

  const [personName, setPersonName] = React.useState([]);

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

  return (
    <form onSubmit={e => onSubmit(e)}>
      <div className="row">
        <div className="col-md-12">
        <FormControl className="w-100 mb-3" >
          <TextField
            error={errors.has("course_name")}
         
            label="Course Name"
            defaultValue="Course Name"
            helperText={`${errors.has("course_name") ? errors.first("course_name").replace("_", " ") : ''}`}
            value={course.course_name || ""}
            id="course_name"
            name="course_name"
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>

          {/* <input
            type="text"
            id="course_name"
            name="course_name"
            className={`form-control ${errors.has("course_name") &&
              "is-invalid"}`}
            placeholder="Course Name"
             value={course.course_name || ""}
            onChange={e => handleChange(e.target.name, e.target.value)}
          /> */}

        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="title">Course Description</label>
        <div className="editor-wrap p-2">
          <MyEditor className={`${errors.has("course_description") &&
              "is-invalid"}`} id="course_description" name="course_description" value={course.course_description || ""} onChange={e => handleChange('course_description', e)} />
            {errors.has("course_description") && (
              <div className="invalid-feedback"> {errors.first("course_description").replace("_", " ")} </div>
            )}
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <FormControl className="w-100 mb-3" error = {errors.has("is_active")}>
            <InputLabel id="is_active"> Course Status</InputLabel>
            <Select
              labelId="is_active"
              id="is_active"
              name="is_active"
              
              placeholder="Course Status"
              onChange={e => handleChange(e.target.name, e.target.value)}
            >
              <MenuItem value={0}>In Active</MenuItem>
              <MenuItem value={1}>Active</MenuItem>
            </Select>
            {errors.has("is_active") && (
            <FormHelperText>{errors.first("is_active").replace("is_active", "course status")}</FormHelperText>
            )}
          </FormControl>
         
        </div>
        <div className="col-md-6">
          <FormControl className="w-100 mb-3" error = {errors.has("catId")}>
            <InputLabel id="catId">Course Categories</InputLabel>
            <Select
              labelId="catId"
              className={`${errors.has("catId") &&  "is-invalid"}`}
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
                <FormHelperText>{errors.first("catId").replace("catId", "course category")}</FormHelperText>
              )}
          </FormControl>
        </div>
      </div>


      <div className="row">
        <div className="col-md-12 ml-auto">
        <Button 
          variant="contained"
          disabled={errors.any()}
          type="submit"
          className="text-capitalize colorPrimary"
          disableElevation
        >
          <i className="fa fa-plus mr-2" aria-hidden="true"></i>  Add Course
        </Button>
          {/* <button
            disabled={errors.any()}
            type="submit"
            className="btn btn-primary"
          >
            <i class="fa fa-plus" aria-hidden="true"></i>  Add Course
          </button> */}
        </div>
      </div>
    </form>
  );
};

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
