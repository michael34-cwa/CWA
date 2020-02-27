import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';

const displayName = 'CourseRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  course: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const CourseRow = ({ index, course, togglePublish, handleRemove }) => { 
  return (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{course.courseName}</td>
      {/* <td>{course.courseDescription}</td> */}
      <td>
        {course.catId ? course.catId.map(function(item, index) {
          return <span className="chip-course">{item.categoryName}</span>;
        }).reduce((prev, curr) => [prev, ' ', curr]):''}
      </td>
 

      <td>{course.createdAt && course.createdAt.format("MMMM, DD YYYY")}</td>
      <td>{course.updatedAt && course.updatedAt.format("MMMM, DD YYYY")}</td>
      <td className="btn-right">
        <div className="btn-group" role="group" aria-label="Actions">
          {course.isActive ? (
            <Button 
              size="small"
              variant="contained"
              color="secondary"
              className="text-capitalize mx-1"
              onClick={() => togglePublish(course.id)}
            >
             <i class="fa fa-eye-slash mr-1" aria-hidden="true"></i> Inactive
            </Button >
          ) : (
            <Button
              size="small"
              variant="contained"
              className="colorPrimary text-capitalize mx-1"
                onClick={() => togglePublish(course.id)}
            >
             <i class="fa fa-eye mr-1" aria-hidden="true"></i> Active
            </Button>
          )}
          <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1">
      
            <Link to={`courses/${course.id}/edit`}>
              <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i> Edit
                  </Link>
          </Button >
          <Button
            size="small"
            variant="contained"
            color = "secondary"
            className="text-capitalize mx-1"
            onClick={() => handleRemove(course.id)}
          >
           <i class="fa fa-trash-o mr-1" aria-hidden="true"></i> Delete
          </Button>
        </div>
      </td>
    </tr>
  );
}

CourseRow.displayName = displayName
CourseRow.propTypes = propTypes

export default CourseRow