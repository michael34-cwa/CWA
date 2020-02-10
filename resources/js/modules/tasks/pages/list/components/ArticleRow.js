import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'ArticleRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  article: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const ArticleRow = ({ index, article, togglePublish, handleRemove }) => { 
  return (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{article.taskName}</td>
      <td>{article.taskDescription}</td>  
      <td>{article.courseName.courseName}</td> 
      <td>{article.createdAt && article.createdAt.format("MMMM, DD YYYY")}</td>
      <td>{article.updatedAt && article.updatedAt.format("MMMM, DD YYYY")}</td>
      <td className="btn-right">
        <div className="btn-group" role="group" aria-label="Actions">
          {article.isActive ? (
            <button
              className="btn btn-warning"
              onClick={() => togglePublish(article.id)}
            >
             <i class="fa fa-eye-slash" aria-hidden="true"></i> In Active
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={() => togglePublish(article.id)}
            >
              <i class="fa fa-eye" aria-hidden="true"></i> Active
            </button>
          )}

          <Link className="btn btn-primary" to={`tasks/${article.id}/edit`}>
           <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => handleRemove(article.id)}
          >
           <i class="fa fa-trash-o" aria-hidden="true"></i> Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

ArticleRow.displayName = displayName
ArticleRow.propTypes = propTypes

export default ArticleRow