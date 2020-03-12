// import libs
import React, { Component } from 'react'
import { taskDetailsRequest } from '../../service'
import { Button } from '@material-ui/core';

// import components
import TaskRow from './components/TaskRow'

class Page extends Component {
  
  constructor(props) {
    super(props)
     
    const course = this.props.course.toJson() 
    this.state = {
      course,
     } 
    // this.pageChange = this.pageChange.bind(this)
  }

  UNSAFE_componentWillMount() {

    this.loadCourse()

  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    const course = nextProps.course.toJson()
    
    if (!_.isEqual(this.state.course, course)) {
      this.setState({ course })
    }

  }
  
  loadCourse() {  
    const { match, course, dispatch } = this.props
      if (!course.id) {  
      dispatch(taskDetailsRequest(match.params.id))  
     }
   
  }
  
  // pageChange () {
  //   const { match, course, dispatch } = this.props
 
  //   this.props.history.push("/first");
    
  // };



 
  renderList() {
    const { course } = this.props
    
    if (course.id) {
      return <TaskRow {...this.state}  />
    }
  }
  
  render() {
    const { match, course, dispatch } = this.props
    return <main className="dashboard-right" role="main">
    <div class="card"><div class="card-body bg-white">
      <h1>Task Details</h1>
        <a target="_blank" href={"/file_manager/"+course.id}>
        <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1" onClick={this.pageChange}  >
          Start Now
         </Button >
        </a>
        {this.renderList() }
      </div>
      </div>
    </main>
  }
}

export default Page
