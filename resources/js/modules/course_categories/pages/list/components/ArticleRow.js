import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'ArticleRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  category: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const ArticleRow = ({ index, category, togglePublish, handleRemove }) => {
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
             Edit
           </Link>
           <button
             className="btn btn-danger"
             onClick={() => handleRemove(category.id)}
           >
             Delete
           </button>
         </div>
       </td>
     </tr>
   );
}

ArticleRow.displayName = displayName
ArticleRow.propTypes = propTypes

export default ArticleRow