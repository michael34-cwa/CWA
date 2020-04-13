import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'CourseRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  course: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const CourseRow = ({ index, course }) => { 
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
      {/* <td className="btn-right">
        <div className="btn-group" role="group" aria-label="Actions">
          {course.isActive ? (
            <button
              className="btn btn-warning "
              onClick={() => togglePublish(course.id)}
            >
             <i class="fa fa-eye-slash" aria-hidden="true"></i> In Active
            </button>
          ) : (
            <button
              className="btn btn-success"
                onClick={() => togglePublish(course.id)}
            >
             <i class="fa fa-eye" aria-hidden="true"></i> Active
            </button>
          )}
          <Link className="btn btn-primary" to={`courses/${course.id}/edit`}>
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => handleRemove(course.id)}
          >
           <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
          </button>
        </div>
      </td> */}
    </tr>
  );
}

CourseRow.displayName = displayName
CourseRow.propTypes = propTypes

export default CourseRow