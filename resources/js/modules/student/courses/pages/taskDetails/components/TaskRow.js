import React from 'react'
import { Button } from '@material-ui/core';

const TaskRow = ({   course,courseOne }) => { 
 
  return <div className="container">
 
    <div className="row">
   <div className="course-details w-100">

   <div className="course_name">
     <h5 className="my-3 text-center">{courseOne.courseName ? courseOne.courseName : ''}</h5>  
     </div>
      <div className="task-description-div">
      <div dangerouslySetInnerHTML={{ __html: courseOne.courseDescription  }} />
      </div>


     <div className="course_name">
     <h1>Task Details</h1>
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
