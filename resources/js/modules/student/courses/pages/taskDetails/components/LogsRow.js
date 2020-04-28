import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';

const displayName = 'LogsRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  logs: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  openModel: PropTypes.func.isRequired,
}

const LogsRow = ({ index, logs, togglePublish, editLog, pageNo }) => {
  return (
    <tr key={index}>
      <th scope="row">{index++}</th>  
      <td>{logs.name}</td>  
      <td>{logs.startTime}</td>  
      <td>{logs.endTime}</td>  
      <td>{logs.vidDisc}</td>  
      <td>{logs.createdAt && logs.createdAt.format("MMMM, DD YYYY")}</td>
      <td>{logs.updatedAt && logs.updatedAt.format("MMMM, DD YYYY")}</td>
      <td className="btn-right">
         <div className="btn-group" role="group" aria-label="Actions">
         <Button
            size="small"
            variant="contained"
            color="secondary"
            className="text-capitalize mx-1"
            onClick={() => editLog(logs.id)}
          >
           Edit
          </Button> 
        </div> 
      </td>
    </tr>
  );
}

LogsRow.displayName = displayName
LogsRow.propTypes = propTypes

export default LogsRow