// import libs
import React, { Component } from 'react'
import { taskDetailsRequest } from '../../service'
 
// import components
import TaskRow from './components/TaskRow'

class Page extends Component {
  
  constructor(props) {
    super(props)
     
    const course = this.props.course.toJson() 
    this.state = {
      course,
     } 
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
  
 
 
  renderList() {
    const { course } = this.props
    
    if (course.id) {
      return <TaskRow {...this.state}  />
    }
  }
  
  render() {
    return <main className="dashboard-right" role="main">
    <div class="card"><div class="card-body bg-white">
      <h1>Task Details</h1>
        {this.renderList() }
      </div>
      </div>
    </main>
  }
}

export default Page
