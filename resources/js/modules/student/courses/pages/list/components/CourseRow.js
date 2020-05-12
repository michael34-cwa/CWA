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
 let concar = []
 if(course.id){
  return (
 
<React.Fragment>
      <Grid item sm={6} xs={12} md={4} className="course-grid" >
      <div className="course-boxes">
        <Paper> {'Course Name: ' + course.courseName}</Paper>
         <div className="course-technology">
        <Paper>Technology: &nbsp; 
        { course.catId.length >0 ? course.catId.map(function(item, index) {
       concar = cataroy.find(cat => cat.id == item.catId)
      
      return <span className="chip-course">{concar ? concar.categoryName : ''}</span>;

          }).reduce((prev, curr) => [prev, ' ', curr]):''}  
        </Paper>
        </div>
        <Paper className="text-center button_bottom">
          <Link className="btn btn-primary" to={`task_details/${course.id}/${course.groupId}`}>  View Task </Link>
        </Paper>
        </div>
      </Grid> 
    </React.Fragment>
     
  );
        }else{
          return (
<div></div>
          );
        }
}

CourseRow.displayName = displayName
CourseRow.propTypes = propTypes

export default CourseRow