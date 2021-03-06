import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

  

const TaskRow = ({course ,rolename}) => {
console.log('course')
console.log(course)
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
          {course.catId.length >0  ? course.catId.map(function (item, index) {
            return <li className="chip-course">{item.categoryName}</li>;
          }).reduce((prev, curr) => [prev, ' ', curr]) : ''}
        </ul>
        </div>
      </div> 
       </Grid>
      </Grid>  
      <div className="task-list  px-0 col-sm-12 w-100">  
      <h2>Tasks</h2>    
      <Grid container item spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {course.getTasks.length > 0 ? course.getTasks.map((itemTask, index) => {
                return <React.Fragment>
                  <Grid item xs={4}>
                  <div className="course-boxes">
                    <Paper className="task_name"> {itemTask.taskName}</Paper>
      <div dangerouslySetInnerHTML={{ __html: itemTask.taskDescription.substr(0, 200).trim()+'....'  }} />
          { course.status  >0 ? <Paper className="text-center">  <Link className="btn btn-primary mt-3" to={`/task_details/${course.id}/${window.btoa(itemTask.id)}/${course.studentId}`}>  View Task</Link></Paper> : '' }
                     </div>
                     </Grid>
                   </React.Fragment>
          }) : 'No Task Assigned'} 
        </Grid>
      </Grid>  
      </div>
    </div>
  </div>
}

 

export default TaskRow
