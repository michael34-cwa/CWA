import React from 'react';
import PropTypes from 'prop-types';
import MyEditor from '../../../../../../common/wysiwyg-editor/index'
import LoadingComponent from '../../../../../../common/loader'
import { TextField, Button, FormHelperText, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const displayName = 'CourseFrom'
const propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const Form = ({ loading,dataList, course, errors, onChange, onSubmit }) => {


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
 
  return <form onSubmit={e => onSubmit(e)}>
    <div className="row">
      <div className="col-md-12">
        <FormControl className="w-100 mb-3" >
          <TextField
            error={errors.has("courseName")}
            label="Course Name"
            defaultValue="Course Name"
            helperText={`${errors.has("courseName") ? errors.first("courseName").replace("_", " ") : ''}`}
            value={course.courseName || ""}
            id="courseName"
            name="courseName"
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </FormControl>
      </div>
    </div>

    <div className="mb-3">
      <label htmlFor="description"> Course Description</label>
      <div className="editor-wrap p-2">
        <MyEditor id="courseDescription" value={course.courseDescription} onChange={e => handleChange('courseDescription', e)} />
        {errors.has("courseDescription") && (
          <div className="invalid-feedback">
            {errors.first("courseDescription")}
          </div>
        )}
      </div>
    </div>

    <div className="row">
      <div className="col-md-6">
      <FormControl className="w-100 mb-3" error = {errors.has("is_active")}>
        <InputLabel id="is_active"> Course Status</InputLabel>
        <Select
          labelId="is_active"
          id="isActive"
          name="isActive"
          placeholder="Course Status"
          value = {course.isActive}
          onChange={e => handleChange(e.target.name, e.target.value)}
        >
          <MenuItem value={0}>In Active</MenuItem>
          <MenuItem value={1}>Active</MenuItem>
        </Select>
        {errors.has("isActive") && (
        <FormHelperText>{errors.first("isActive")}</FormHelperText>
        )}
      </FormControl>
        {errors.has("isActive") && (
          <div className="invalid-feedback">{errors.first("isActive")}</div>
        )}
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
        >
          <i className="fa fa-plus mr-2" aria-hidden="true"></i>  Update Course
        </Button>
        {/* <button disabled={errors.any()} type="submit" className="btn btn-primary"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Update Courses</button> */}
      </div>
    </div>
  </form>
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
