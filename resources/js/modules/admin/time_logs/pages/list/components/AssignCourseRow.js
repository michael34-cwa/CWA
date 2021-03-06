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
       <td>{assignCourse.courseName}</td> 
       {/* <td>{assignCourse.taskName}</td>  */}

       <td> {assignCourse.getTask.length > 0  ? assignCourse.getTask.map(function (item, index) {
          return <span className="chip-course">{item.taskName}</span>;
        }).reduce((prev, curr) => [prev, ' ', curr]) : ''} </td>

<td>  {assignCourse.user.length > 0  ? assignCourse.user.map(function (item, index) {
          return <span className="chip-course">{item.firstName+' '+item.lastName}</span>;
        }).reduce((prev, curr) => [prev, ' ', curr]) : ''} </td>
        

       <td>{assignCourse.createdAt && assignCourse.createdAt.format("MMMM, DD YYYY")}</td>
       <td>{assignCourse.updatedAt && assignCourse.updatedAt.format("MMMM, DD YYYY")}</td>
       <td>
         <div className="btn-group" role="group" aria-label="Actions">
            
             
           {/* <Link to={`school_lists/${schoolList.id}/edit`} >
              <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
               <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i> Edit
               </Button >
            </Link> */}

          <Link to={`/admin/time_logs/${assignCourse.id}`} >
              <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
                View Time Logs
               </Button >
            </Link>

           {/* <Button
             size="small"
             variant="contained"
             color="secondary"
             className="text-capitalize mx-1"
             onClick={() => openModel(assignCourse.id)}
           >
             <i class="fa fa-trash-o mr-1" aria-hidden="true"></i> Remove Course
            </Button> */}
         </div>
       </td>
     </tr>
   );
}

AssignCourseRow.displayName = displayName
AssignCourseRow.propTypes = propTypes

export default AssignCourseRow