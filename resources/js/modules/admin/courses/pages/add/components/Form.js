import React from 'react'
import PropTypes from 'prop-types'
import MyEditor from '../../../../../../common/wysiwyg-editor/index'
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem"; 
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
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
    if (name === 'catId'){
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
      <div className="form-group row">
  
        <div className="col-md-12">
 
           <TextField
             error={errors.has("course_name")}
              
             className={` ${errors.has("course_name") &&
               "is-invalid"}`}
             id="standard-error-helper-text"
             label="Course Name"
             defaultValue="Course Name"
             helperText={`${errors.has("course_name") ? errors.first("course_name").replace("_", " ") : ''}`}
             value={course.course_name || ""}
             id="course_name"
             name="course_name"
             onChange={e => handleChange(e.target.name, e.target.value)}
           />

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

 
    
       <div className="form-group row">
         <label htmlFor="title" className="col-md-12 col-form-label">
           Course Description
        </label>
         <div className="col-md-12"> 
           <MyEditor className={`form-control ${errors.has("course_name") &&
             "is-invalid"}`}  id="course_description" name="course_description" value={course.course_description || ""} onChange={e => handleChange('course_description', e)} />
       {errors.has("course_description") && (
             <div className="invalid-feedback"> {errors.first("course_description").replace("_", " ")} </div>
           )}
         </div>
       </div>


      <div className="form-group row">
         <label htmlFor="description" className="col-md-12 col-form-label">
           Course Status
        </label> 
        <div className="col-md-12">
           <FormControl className="w-100">
             <InputLabel id="is_active"> Course Status</InputLabel>
           <Select
               labelId="is_active"
             id="is_active"
             name="is_active"
             className={`${errors.has("is_active") &&
               "is-invalid"}`}
             placeholder="Course Status"
              onChange={e => handleChange(e.target.name, e.target.value)}
           >
             <MenuItem value={0}>In Active</MenuItem>
             <MenuItem value={1}>Active</MenuItem> 
           </Select>
           </FormControl>
          {errors.has("is_active") && (
             <div className="invalid-feedbackd">{errors.first("is_active").replace("is_active", "course status")}</div>
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
             <div className="invalid-feedback">{errors.first("catId").replace("catId", "course category")}</div>
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
            <i class="fa fa-plus" aria-hidden="true"></i>  Add Courses
          </button>
        </div>
      </div>
    </form>
  );
};

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
