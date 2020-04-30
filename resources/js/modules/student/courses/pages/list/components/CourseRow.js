import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
const displayName = 'CourseRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  course: PropTypes.object.isRequired,
  togglePublish: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
}
 
const CourseRow = ({ course,cataroy }) => { 
 
  return ( 
    <React.Fragment>
      <Grid item sm={6} xs={12} md={4} className="course-grid" >
      <div className="course-boxes">
        <Paper> {'Course Name: ' + course.courseName}</Paper>
         <div className="course-technology">
        <Paper>Technology: &nbsp; 
         {/* <span className="chip-course">{'Laravel'}</span> */}
        {
        cataroy.length >0 ? cataroy.map(function(items, indexs) { 
        course.catId.map(function(item, index) {
          console.log(items.categoryName)
          return  <div> {items.categoryName} </div>
      //  return <span className="chip-course">{items.categoryName}</span>;  
          }) 
        }) : ''
          }  
        </Paper>
        </div>
        <Paper className="text-center button_bottom">
          <Link className="btn btn-primary" to={`task_details/${course.id}`}>  View Tasks </Link>
        </Paper>
        </div>
      </Grid> 
    </React.Fragment>
  
  );
}

CourseRow.displayName = displayName
CourseRow.propTypes = propTypes

export default CourseRow