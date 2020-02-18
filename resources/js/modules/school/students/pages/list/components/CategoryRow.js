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

  console.log(category);
   return (
     <tr key={index}>
       <th scope="row">{index + 1}</th>
       <td>{category.first_name}</td>
       <td>{category.last_name}</td>
       <td>{category.email}</td>
       <td>{category.phone}</td>
       <td>{category.createdAt && category.createdAt.format("MMMM, DD YYYY")}</td>
       <td>{category.updatedAt && category.updatedAt.format("MMMM, DD YYYY")}</td>
       <td>
         <div className="btn-group" role="group" aria-label="Actions">
           <Link
             className="btn btn-primary"
             to={`students/${category.id}/edit`}
           >
             <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
           </Link>
        
           {category.activation ? (
             <button
               className="btn btn-warning "
               onClick={() => togglePublish(category.id)}
             >
               <i class="fa fa-eye-slash" aria-hidden="true"></i>In Active
            </button>
           ) : (
               <button
                 className="btn btn-success"
                 onClick={() => togglePublish(category.id)}
               >
                 <i class="fa fa-eye" aria-hidden="true"></i> Active
            </button>
             )}
          
         </div>
       </td>
     </tr>
   );
}

CategoryRow.displayName = displayName
CategoryRow.propTypes = propTypes

export default CategoryRow