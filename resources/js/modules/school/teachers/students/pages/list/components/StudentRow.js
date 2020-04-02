import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';

const displayName = 'CategoryRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  category: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  pageNo: PropTypes.func.isRequired,
}

const CategoryRow = ({ index, category, togglePublish, pageNo }) => {

  return (
    <tr key={index}>
      <th scope="row">{pageNo}</th>
      <td>{category.first_name}</td>
      <td>{category.last_name}</td>
      <td>{category.email}</td>
      <td>{category.phone}</td> 
      <td>

        <div className="btn-group" role="group" aria-label="Actions">
          <Link to={`/courses/${category.user_id}`}>
            <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1">
              <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i> Course Lists
            </Button >
          </Link> 
           

        </div>

      </td>
    </tr>
  );
}

CategoryRow.displayName = displayName
CategoryRow.propTypes = propTypes

export default CategoryRow