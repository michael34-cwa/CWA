import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//import DeleteModel from '../../../../../../common/model/DeleteModel'
import { Button } from '@material-ui/core';

const displayName = 'assignCourseRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  assignCourse: PropTypes.object.isRequired,
  openModel: PropTypes.func.isRequired,
}

const AssignCourseRow = ({ index, assignCourse, openModel,pageNo, togglePublish}) => {
 
   return ( 
     <tr key={index}>
       <th scope="row">{pageNo}</th>     
       <td>{assignCourse.taskName}</td> 
       {/* <td>{assignCourse.translate}</td>  */}
     { assignCourse.translate ? <td>   <Button
            size="small"
            variant="contained"
            color="secondary"
            className="text-capitalize colorPrimary mx-1"
            onClick={() => openModel(assignCourse.translate,'single')}
          >
            <i class="fa fa-colorPrimary-o mr-1" aria-hidden="true"></i> View
          </Button>
     </td>  : '' }

     { assignCourse.getLogs.length >0 ? <td>   <Button
            size="small"
            variant="contained"
            color="secondary"
            className="text-capitalize colorPrimary mx-1"
            onClick={() => openModel(assignCourse.getLogs,'multi')}
          >
            <i class="fa fa-colorPrimary-o mr-1" aria-hidden="true"></i> View
          </Button>
     </td>  : <td></td> }
       <td>{assignCourse.createdAt && assignCourse.createdAt.format("MMMM, DD YYYY")}</td>
       <td>{assignCourse.updatedAt && assignCourse.updatedAt.format("MMMM, DD YYYY")}</td>
       <td>
      
       </td>
     </tr>
   );
}

AssignCourseRow.displayName = displayName
AssignCourseRow.propTypes = propTypes

export default AssignCourseRow