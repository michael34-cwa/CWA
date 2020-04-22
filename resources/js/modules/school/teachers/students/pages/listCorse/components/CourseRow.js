import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';
const displayName = 'CourseRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  course: PropTypes.object.isRequired,
}
 
const CourseRow = ({  index,course,pageNo }) => { 
 
  return (

    <tr key={pageNo}>
    <th scope="row">{pageNo}</th>  
    <td>{course.courseName}</td> 
    <td>
      {course.catId.length > 0 ? course.catId.map(function (item, index) {
        return <span className="chip-course">{item.categoryName}</span>;
      }).reduce((prev, curr) => [prev, ' ', curr]) : ''}
    </td> 
    <td>{course.createdAt && course.createdAt.format("MMMM, DD YYYY")}</td>
    <td>{course.updatedAt && course.updatedAt.format("MMMM, DD YYYY")}</td>
    <td>
      <div className="btn-group" role="group" aria-label="Actions">
        <Link to={`/course_tasks/${course.id}/${course.studentId}`}>
          <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1">
            <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i> View Task
          </Button >
        </Link>  

      </div>
    </td>
  </tr>
  
  
  );
}

CourseRow.displayName = displayName
CourseRow.propTypes = propTypes

export default CourseRow