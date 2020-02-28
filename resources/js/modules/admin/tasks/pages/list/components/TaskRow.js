import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';


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
            <Button
              size="small"
              variant="contained"
              color="secondary"
              className="text-capitalize mx-1"
              onClick={() => togglePublish(task.id)}
            >
              <i class="fa fa-eye-slash mr-1" aria-hidden="true"></i> Inactive
            </Button >
          ) : (
              <Button
                size="small"
                variant="contained"
                className="colorPrimary text-capitalize mx-1"
                onClick={() => togglePublish(task.id)}
              >
                <i class="fa fa-eye mr-1" aria-hidden="true"></i> Active
            </Button>


            )}

          <Link to={`tasks/${task.id}/edit`}>
            <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1" >
              <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i> Edit
          </Button >
          </Link>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            className="text-capitalize mx-1"
            onClick={() => handleRemove(task.id)}
          >
            <i class="fa fa-trash-o mr-1" aria-hidden="true"></i> Delete
          </Button>
        </div>
      </td>
    </tr>
  );
}

TaskRow.displayName = displayName
TaskRow.propTypes = propTypes

export default TaskRow