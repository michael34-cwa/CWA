import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import DeleteModel from '../../../../../../common/model/DeleteModel'
const displayName = 'CategoryRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  category: PropTypes.object.isRequired,
  openModel: PropTypes.func.isRequired,
}

const CategoryRow = ({ index, category, openModel, pageNo, handleRemove }) => {
   return (
     <tr key={index}>
       <th scope="row">{pageNo}</th>
       <td>{category.category_name}</td>
       <td>{category.createdAt && category.createdAt.format("MMMM, DD YYYY")}</td>
       <td>{category.updatedAt && category.updatedAt.format("MMMM, DD YYYY")}</td>
       <td>
         <div className="btn-group" role="group" aria-label="Actions">
           <Link
             className="btn btn-primary"
             to={`course_categories/${category.id}/edit`}
           >
             <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
           </Link>
      
           <DeleteModel meaid={category.id} handleRemove={handleRemove} />  
         </div>
       </td>
     </tr>
   );
}

CategoryRow.displayName = displayName
CategoryRow.propTypes = propTypes

export default CategoryRow