import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'TaskRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  task: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const TaskRow = ({ index, task, togglePublish, handleRemove }) => { 
  return (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{task.taskName}</td>
      {/* <td>{task.taskDescription}</td>   */}
      <td>{task.courseName.courseName}</td> 
      <td>{task.createdAt && task.createdAt.format("MMMM, DD YYYY")}</td>
      <td>{task.updatedAt && task.updatedAt.format("MMMM, DD YYYY")}</td>
      <td className="btn-right">
        <div className="btn-group" role="group" aria-label="Actions">
          {task.isActive ? (
            <button
              className="btn btn-warning"
              onClick={() => togglePublish(task.id)}
            >
             <i class="fa fa-eye-slash" aria-hidden="true"></i> In Active
            </button>
          ) : (
            <button
              className="btn btn-success"
                onClick={() => togglePublish(task.id)}
            >
              <i class="fa fa-eye" aria-hidden="true"></i> Active
            </button>
          )}

          <Link className="btn btn-primary" to={`tasks/${task.id}/edit`}>
           <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => handleRemove(task.id)}
          >
           <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

TaskRow.displayName = displayName
TaskRow.propTypes = propTypes

export default TaskRow