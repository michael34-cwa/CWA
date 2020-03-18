import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//import DeleteModel from '../../../../../../common/model/DeleteModel'
import { Button } from '@material-ui/core';

const displayName = 'projectAdminRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  projectAdmin: PropTypes.object.isRequired,
  openModel: PropTypes.func.isRequired,
}

const ProjectAdminRow = ({ index, projectAdmin, pageNo, togglePublish}) => {
   return (
     <tr key={index}>
       <th scope="row">{pageNo}</th>  
       <td>{projectAdmin.firstName}</td>
       <td>{projectAdmin.lastName}</td>
       <td>{projectAdmin.email}</td>
       <td>{projectAdmin.phone}</td>
       <td>{projectAdmin.createdAt && projectAdmin.createdAt.format("MMMM, DD YYYY")}</td>
       <td>{projectAdmin.updatedAt && projectAdmin.updatedAt.format("MMMM, DD YYYY")}</td>
       <td>
         <div className="btn-group" role="group" aria-label="Actions">
            
             
           <Link to={`project_admin/${projectAdmin.id}/edit`} >
              <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
               <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i> Edit
               </Button >
            </Link>
            
            
           {projectAdmin.isActive ? (
             <Button
               size="small"
               variant="contained"
               color="secondary"
               className="text-capitalize mx-1"
               onClick={() => togglePublish(projectAdmin.user_id)}
             >
               <i class="fa fa-eye-slash mr-1" aria-hidden="true"></i> Inactive
            </Button >
           ) : (
               <Button
                 size="small"
                 variant="contained"
                 className="colorPrimary text-capitalize mx-1"
                 onClick={() => togglePublish(projectAdmin.user_id)}
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

ProjectAdminRow.displayName = displayName
ProjectAdminRow.propTypes = propTypes

export default ProjectAdminRow