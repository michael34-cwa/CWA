import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//import DeleteModel from '../../../../../../common/model/DeleteModel'
import { Button } from '@material-ui/core';

const displayName = 'assignTaskRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  assignTask: PropTypes.object.isRequired,
  openModel: PropTypes.func.isRequired,
}

const AssignTaskRow = ({ index, assignTask, openModel,pageNo, togglePublish}) => {

   return (
     <tr key={index}>
       <th scope="row">{pageNo}</th>
       <td>{assignTask.taskName}</td>
       <td>{assignTask.createdAt && assignTask.createdAt.format("MMMM, DD YYYY")}</td>
       <td>{assignTask.updatedAt && assignTask.updatedAt.format("MMMM, DD YYYY")}</td>
       {/* <td>{assignTask.status}</td> */}
       <td>
         <div className="btn-group" role="group" aria-label="Actions">
             
           <Button
             size="small"
             variant="contained"
             color="secondary"
             className="text-capitalize mx-1"
             onClick={() => openModel(assignTask.id)}
           >
             <i class="fa fa-trash-o mr-1" aria-hidden="true"></i> Remove Task
            </Button>

           {/* <Link to={`/assign_task/${assignCourse.id}/`} >
              <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
               <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i> Assign Task
               </Button >
            </Link> */}

         </div>
       </td>
     </tr>
   );
}

AssignTaskRow.displayName = displayName
AssignTaskRow.propTypes = propTypes

export default AssignTaskRow