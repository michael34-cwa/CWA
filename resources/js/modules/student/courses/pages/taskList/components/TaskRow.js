import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

const displayName = 'CourseFrom'
const propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

const TaskRow = ({ dataList, course, errors, onChange, onSubmit }) => {

 
  function handleChange(name, value) {
    if (name === 'catId') {
      setPersonName(value);
    }

    if (value !== course[name]) {
      onChange(name, value);
    }
  }

   
 
  return <div className="container">

    <div className="row">
      <h1 className="my-3">Course Details</h1>
              <h3 className="my-3">Course Name</h3> <h3 className="my-3">Course Name</h3>
        <p>{course.courseName}</p>
        <h3 className="my-3">Course Details</h3>
  
        <div dangerouslySetInnerHTML={{ __html:  course.courseDescription  }} />
        <h3 className="my-3">Technology</h3>
        <ul>
          {course.catId ? course.catId.map(function (item, index) {
            return <li>{item.categoryName}</li>;
          }).reduce((prev, curr) => [prev, ' ', curr]) : ''}
        </ul>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
     
          {course.getTasks ? course.getTasks.map((itemTask, index) => {
                return <React.Fragment>
                  <Grid item xs={4}>
                    <Paper>Task Name: {itemTask.taskName}</Paper>
                    <Paper>  <Link className="btn btn-primary" to={`/task_details/${itemTask.id}`}>  View Tasks Details</Link></Paper>
                     </Grid>
                   </React.Fragment>
          }) : ''} 
        
        </Grid>
      </Grid>  
    </div>
  </div>
}

TaskRow.displayName = displayName
TaskRow.propTypes = propTypes

export default TaskRow
