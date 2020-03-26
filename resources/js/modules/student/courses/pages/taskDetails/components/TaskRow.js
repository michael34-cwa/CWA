import React from 'react'
import { Button } from '@material-ui/core';

const TaskRow = ({   course }) => { 
 
  return <div className="container">
 
    <div className="row">
   <div className="course-details w-100">
     <div className="course_name">
     <h5 className="my-3 text-center">{course.taskName ? course.taskName : ''}</h5>  
     </div>
      <div className="task-description-div">
      <div dangerouslySetInnerHTML={{ __html: course.taskDescription  }} />
      </div>
        </div>
    </div>
  </div>
} 

export default TaskRow
