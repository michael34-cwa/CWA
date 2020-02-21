import React from 'react'
  

const TaskRow = ({   course }) => { 
  return <div className="container">

    <div className="row">
      <h1 className="my-3">Task Details</h1>
              <h3 className="my-3">Task Name</h3>  
      <p>{course.taskName}</p>
        <h3 className="my-3">Task Details</h3>
  
      <div dangerouslySetInnerHTML={{ __html: course.taskDescription  }} />
        <h3 className="my-3">Technology</h3> 
    </div>
  </div>
} 

export default TaskRow
