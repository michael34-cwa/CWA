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
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={15}>
      <div className="course-details w-100">
      <div className="course_name">
      <h5 className="my-3 text-center">{course.courseName}</h5>
      </div>
      <div className="description-div">
       <div dangerouslySetInnerHTML={{ __html:  course.courseDescription  }} />
       </div>
       <div className="course_categories">
      <h5 className="my-3">Course Categories:</h5>
          <ul>
          {course.catId ? course.catId.map(function (item, index) {
            return <li className="chip-course">{item.categoryName}</li>;
          }).reduce((prev, curr) => [prev, ' ', curr]) : ''}
        </ul>
        </div>
      </div> 
       </Grid>
      </Grid>  
      <div className="task-list">  
      <h2>Tasks</h2>    
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {course.getTasks ? course.getTasks.map((itemTask, index) => {
                return <React.Fragment>
                  <Grid item xs={4}>
                  <div className="course-boxes">
                    <Paper className="task_name"> {itemTask.taskName}</Paper>
     <Paper> {'The infections found in the two jails, in the northern'}</Paper>
                     <Paper className="text-center">  <Link className="btn btn-primary mt-3" to={`/task_details/${itemTask.id}`}>  View Task</Link></Paper>
                     </div>
                     </Grid>
                   </React.Fragment>
          }) : ''} 
        </Grid>
      </Grid>  
      </div>
    </div>
  </div>
}

TaskRow.displayName = displayName
TaskRow.propTypes = propTypes

export default TaskRow
