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
 
const CourseRow = ({ course }) => { 
  return (
 
    <React.Fragment>
      <Grid item sm={6} xs={12} md={4} className="course-grid" >
      <div className="course-boxes">
        <Paper> {'Course Name: ' + course.courseName}</Paper>
         <div className="course-technology">
        <Paper>Technology: &nbsp; 
        {course.catId ? course.catId.map(function(item, index) {
        return <span className="chip-course">{item.categoryName}</span>;
          }).reduce((prev, curr) => [prev, ' ', curr]):''}  
        </Paper>
        </div>
        <Paper className="text-center button_bottom">
          <Link className="btn btn-primary" to={`course_tasks/${course.id}`}>  View All Tasks </Link>
        </Paper>
        </div>
      </Grid> 
    </React.Fragment>
  
  );
}

CourseRow.displayName = displayName
CourseRow.propTypes = propTypes

export default CourseRow