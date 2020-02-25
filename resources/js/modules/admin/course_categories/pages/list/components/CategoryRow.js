import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import DeleteModel from '../../../../../../common/model/DeleteModel'
import { Button } from '@material-ui/core';

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
            <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1" href={`course_categories/${category.id}/edit`}>
                <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i> Edit
            </Button >
            <Button
              size="small"
              variant="contained"
              color = "secondary"
              className="text-capitalize mx-1"
              onClick={() => handleRemove(category.id )}
            >
            <i class="fa fa-trash-o mr-1" aria-hidden="true"></i> Delete
            </Button>
      
           {/* <DeleteModel meaid={category.id} handleRemove={handleRemove} />   */}
         </div>
       </td>
     </tr>
   );
}

CategoryRow.displayName = displayName
CategoryRow.propTypes = propTypes

export default CategoryRow