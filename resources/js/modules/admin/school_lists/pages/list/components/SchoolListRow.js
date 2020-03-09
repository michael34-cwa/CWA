import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//import DeleteModel from '../../../../../../common/model/DeleteModel'
import { Button } from '@material-ui/core';

const displayName = 'SchoolListRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  schoolList: PropTypes.object.isRequired,
  openModel: PropTypes.func.isRequired,
}

const SchoolListRow = ({ index, schoolList, pageNo, togglePublish}) => {
   return (
     <tr key={index}>
       <th scope="row">{pageNo}</th>  
       <td>{schoolList.email}</td>  
       <td>{schoolList.schoolName}</td>
       <td>{schoolList.phone}</td>
       <td>{schoolList.schoolAddress}</td> 
       <td>{schoolList.createdAt && schoolList.createdAt.format("MMMM, DD YYYY")}</td>
       <td>{schoolList.updatedAt && schoolList.updatedAt.format("MMMM, DD YYYY")}</td>
       <td>
         <div className="btn-group" role="group" aria-label="Actions">
            
             
           <Link to={`school_lists/${schoolList.id}/edit`} >
              <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
               <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i> Edit
               </Button >
            </Link>
            
            
           {schoolList.isActive ? (
             <Button
               size="small"
               variant="contained"
               color="secondary"
               className="text-capitalize mx-1"
               onClick={() => togglePublish(schoolList.user_id)}
             >
               <i class="fa fa-eye-slash mr-1" aria-hidden="true"></i> Inactive
            </Button >
           ) : (
               <Button
                 size="small"
                 variant="contained"
                 className="colorPrimary text-capitalize mx-1"
                 onClick={() => togglePublish(schoolList.user_id)}
               >
                 <i class="fa fa-eye mr-1" aria-hidden="true"></i> Active
            </Button>
             )}

      
           {/* <DeleteModel meaid={category.id} handleRemove={handleRemove} />   */}
         </div>
       </td>
     </tr>
   );
}

SchoolListRow.displayName = displayName
SchoolListRow.propTypes = propTypes

export default SchoolListRow