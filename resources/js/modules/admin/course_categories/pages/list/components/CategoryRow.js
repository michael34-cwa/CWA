import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'CategoryRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  category: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const CategoryRow = ({ index, category, togglePublish, handleRemove }) => {
   return (
     <tr key={index}>
       <th scope="row">{index + 1}</th>
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
           <button
             className="btn btn-danger"
             onClick={() => handleRemove(category.id)}
           >
            <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
           </button>
          
         </div>
       </td>
     </tr>
   );
}

CategoryRow.displayName = displayName
CategoryRow.propTypes = propTypes

export default CategoryRow