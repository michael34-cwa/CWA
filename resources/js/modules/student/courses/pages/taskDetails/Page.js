// import libs
import React, { Component } from 'react'
import { taskDetailsRequest,courseEditRequest,taskStatusRequest } from '../../service'
import { Button } from '@material-ui/core';
import StatusModel from '../../../../../common/model/StatusModel'
// import components
import TaskRow from './components/TaskRow'

class Page extends Component {
  
  constructor(props) {
    super(props)
  

    const course = this.props.course.toJson() 
    this.state = {
      course,
     } 
     this.togglePublish = this.togglePublish.bind(this);
     this.openModelAss = this.openModelAss.bind(this)
     this.state = {  openAss:false  }; 
  }

  UNSAFE_componentWillMount() {
   
    this.loadCourse()

  }
  
  loadCourse() {  
    const { match, course, dispatch } = this.props
 //    if (!course.id) {  
    //  dispatch(taskDetailsRequest(match.params.id)) 
    let id = match.params.cid
 
    dispatch(courseEditRequest(id))   
  //   } 
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const course = nextProps.course.toJson()
    
    if (!_.isEqual(this.state.course, course)) {
      this.setState({ course })
    }

  }
  


  togglePublish = (id) => {
   this.props.dispatch(taskStatusRequest(id))   
 
   .then(res => {   
     const course = this.props.course;
    course.status = res.data.status;
    this.setState({ openAss: !this.state.openAss })
  });
  }




  openModelAss() {  
 
    this.setState({ openAss: !this.state.openAss })
  }

 
  renderList() {
    const { course } = this.props
 
    if (course.id) {
      return <TaskRow 
        course={course}  
      />
    }
  }
  
  render() {  
 
    const {course}  = this.props  
    return <main className="dashboard-right" role="main">
        
    <div class="card"><div class="card-body bg-white">
      <h1>Task Details</h1>
        {/* <a target="_blank" href={"/file_manager/"+course.id}>

        <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1" onClick={this.pageChange}  >
          Start Now
         </Button >
         </a> */}
  

         {this.state.openAss &&   <StatusModel 
                        openAss={this.state.openAss} 
                        openModelAss={this.openModelAss} 
                        taskId={course.taskId} 
                        title={'Task Confirmation'} 
                        discription={'Are you sure want to complete ?'}  
                        togglePublish={this.togglePublish} 

                      /> }

         {
         course.status == 0? '': 
         course.status == 1? (
         
          <Button
          onClick={this.openModelAss}
          size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
          <i class="fa fa-plus" aria-hidden="true"></i> Complete
        </Button >
          ) : (
            <Button 
            size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
            <i class="fa fa-plus" aria-hidden="true"></i> Completed
          </Button >
          ) 
         }
      
        {this.renderList() }
      </div>
      </div>
    </main>
  }
}

export default Page
