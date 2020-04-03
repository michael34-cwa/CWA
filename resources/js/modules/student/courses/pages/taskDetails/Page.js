// import libs
import React, { Component } from 'react'
import { taskDetailsRequest, courseEditRequest, taskStatusRequest } from '../../service'
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
      status : ''
    }
    this.togglePublish = this.togglePublish.bind(this);
    this.openModelAss = this.openModelAss.bind(this)
    this.state = { openAss: false };
  }

  UNSAFE_componentWillMount() {

    this.loadCourse()

  }

  loadCourse() {
    const { match, course, dispatch } = this.props
    //    if (!course.id) {  
    //  dispatch(taskDetailsRequest(match.params.id)) 
    let id = match.params.cid
    let sid = match.params.sid
    dispatch(courseEditRequest(id, sid))
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

    const { course, user } = this.props

    return <main className="dashboard-right" role="main">

      <div class="card"><div class="card-body bg-white">
        <h1>Task Details</h1>
        {/* <a target="_blank" href={"/file_manager/"+course.id}>

        <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1" onClick={this.pageChange}  >
          Start Now
         </Button >
         </a> */}


        {this.state.openAss && <StatusModel
          openAss={this.state.openAss}
          openModelAss={this.openModelAss}
          taskId={course.taskId}
          title={'Task Confirmation'}
          discription={'Are you sure want to complete task ?'}
          togglePublish={this.togglePublish}

        />}

        {
          user.rolename == 'student' ? course.status == 0 ? (

            <Button
              onClick={this.openModelAss}
              size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
              Complete
            </Button >
          ) :
            course.status == 1 ? (

              <span class="badge badge-primary">In-Progress</span>
            ) : (
                <span class="badge badge-primary">Completed</span>

              ) : ''
        }


        {
          user.rolename == 'teacher' && course.status == 1 ? (
            <div class="panel-footer row"> 
              <div class="col-xs-6 text-left">
                <div class="previous">
                  <Button
                    onClick={this.openModelAss}
                    size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
                    Approve
        </Button >  </div></div>
  
              <div class="col-xs-6 text-right">
                <div class="next">
                  <Button
                    onClick={this.openModelAss}
                    size="small" variant="contained" className="colorDanger text-capitalize mx-1"  >
                    Reject
          </Button >
                </div>
              </div>
            </div>


          ) : course.status == 2 &&           
              <span class="badge badge-primary">Completed</span>



        }

        {this.renderList()}
      </div>
      </div>
    </main>
  }
}

export default Page
