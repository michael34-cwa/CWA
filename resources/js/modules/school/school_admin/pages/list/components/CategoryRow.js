import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';

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
       <td>{category.first_name}</td>
       <td>{category.last_name}</td>
       <td>{category.email}</td>
       <td>{category.phone}</td>
       <td>{category.createdAt && category.createdAt.format("MMMM, DD YYYY")}</td>
       <td>{category.updatedAt && category.updatedAt.format("MMMM, DD YYYY")}</td>
       <td>
         <div className="btn-group" role="group" aria-label="Actions">
           
            <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1">
              <Link to={`school_administrator/${category.id}/edit`}>
                <i class="fa fa-pencil-square-o mr-1" aria-hidden="true"></i> Edit
                  </Link>
            </Button >


  
        
           {category.activation ? (

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
          
         </div>
       </td>
     </tr>
   );
}

CategoryRow.displayName = displayName
CategoryRow.propTypes = propTypes

export default CategoryRow