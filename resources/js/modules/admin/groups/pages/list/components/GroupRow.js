import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//import DeleteModel from '../../../../../../common/model/DeleteModel'
import { Button } from '@material-ui/core';

const displayName = 'CategoryRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  group: PropTypes.object.isRequired,
  openModel: PropTypes.func.isRequired,
}

const GroupRow = ({ index, group, openModel, pageNo, handleRemove }) => {
   return (
     <tr key={index}>
       <th scope="row">{pageNo}</th>  
       {/* <th scope="row">{index + 1}</th> */}
       <td>{group.group_name}</td>
       <td>{group.createdAt && group.createdAt.format("MMMM, DD YYYY")}</td>
       <td>{group.updatedAt && group.updatedAt.format("MMMM, DD YYYY")}</td>
       <td>
         <div className="btn-group" role="group" aria-label="Actions">
            
             
             <Link to={`groups/${group.id}/edit`} >
              <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
               <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i> Edit
               </Button >
            </Link>
            
            
            <Button
              size="small"
              variant="contained"
              color = "secondary"
              className="text-capitalize mx-1"
             onClick={() => openModel(group.id )}
            >
            <i class="fa fa-trash-o mr-1" aria-hidden="true"></i> Delete
            </Button>
      
            <Link to={`/admin/group_students/${group.id}/${group.schoolId}`} >
              <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
               <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i> Assign Students
               </Button >
            </Link>
           {/* <DeleteModel meaid={category.id} handleRemove={handleRemove} />   */}
         </div>
       </td>
     </tr>
   );
}

GroupRow.displayName = displayName
GroupRow.propTypes = propTypes

export default GroupRow