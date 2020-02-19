import React from 'react'
import PropTypes from 'prop-types'



const displayName = 'CourseFrom'
const propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const TaskRow = ({ dataList, course, errors, onChange, onSubmit }) => {




  function handleChange(name, value) {
    if (name === 'catId') {
      setPersonName(value);
    }

    if (value !== course[name]) {
      onChange(name, value);
    }
  }



  return <div className="container">
 
    <div className="row">
      <div className="col-md-8">
        {/* <img className="img-fluid" src="http://placehold.it/750x500" alt=""> */}
    </div>
        <div className="col-md-4">
        <h3 className="my-3">Course Name</h3>
        <p>{course.courseName}</p>
        <h3 className="my-3">Course Details</h3>
       
      <div dangerouslySetInnerHTML={{ __html: course.courseDescriptio }} />
          <h3 className="my-3">Technology</h3>
          <ul> 
          {course.catId ? course.catId.map(function (item, index) {
            return <li>{item.categoryName}</li>;
          }).reduce((prev, curr) => [prev, ' ', curr]) : ''} 
          </ul>
        </div>
      </div>
    </div>
            }
           
           TaskRow.displayName = displayName
           TaskRow.propTypes = propTypes
           
           export default TaskRow
