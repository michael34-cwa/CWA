import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//import DeleteModel from '../../../../../../common/model/DeleteModel'
import { Button } from '@material-ui/core';

const displayName = 'CategoryRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  category: PropTypes.object.isRequired,
  openModel: PropTypes.func.isRequired,
}

const CategoryRow = ({ index, category, openModel, pageNo, togglePublish}) => {
   return (
     <tr key={index}>
       <th scope="row">{pageNo}</th>   
       <td>{category.schoolName}</td>
       <td>{category.phone}</td>
       <td>{category.schoolAddress}</td> 
       <td>{category.createdAt && category.createdAt.format("MMMM, DD YYYY")}</td>
       <td>{category.updatedAt && category.updatedAt.format("MMMM, DD YYYY")}</td>
       <td>
         <div className="btn-group" role="group" aria-label="Actions">
            
             
           <Link to={`school_lists/${category.id}/edit`} >
              <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
               <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i> Edit
               </Button >
            </Link>
            
            
           {category.isActive ? (
             <Button
               size="small"
               variant="contained"
               color="secondary"
               className="text-capitalize mx-1"
               onClick={() => togglePublish(category.id)}
             >
               <i class="fa fa-eye-slash mr-1" aria-hidden="true"></i> Inactive
            </Button >
           ) : (
               <Button
                 size="small"
                 variant="contained"
                 className="colorPrimary text-capitalize mx-1"
                 onClick={() => togglePublish(category.id)}
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

CategoryRow.displayName = displayName
CategoryRow.propTypes = propTypes

export default CategoryRow