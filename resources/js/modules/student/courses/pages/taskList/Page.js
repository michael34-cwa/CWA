// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { courseEditRequest, courseStatusRequest } from '../../service'
import ReeValidate from 'ree-validate'
import StatusModel from '../../../../../common/model/StatusModel'
import LoadingComponent from '../../../../../common/loader'
// import components
import { Button } from '@material-ui/core';
import TaskRow from './components/TaskRow'
import { Link } from "react-router-dom";

class Page extends Component {
  static displayName = 'EditCourse'
  static propTypes = {
    match: PropTypes.object.isRequired,
    course: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)


    const course = this.props.course.toJson()
    this.state = {
      course,
    }
    this.togglePublish = this.togglePublish.bind(this);
    this.openModelAss = this.openModelAss.bind(this)
    this.state = { openAss: false };
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

  togglePublish = (id) => {
    this.props.dispatch(courseStatusRequest(id))

      .then(res => {
        const course = this.props.course;
        course.status = res.data.status;
        this.setState({ openAss: !this.state.openAss })
      });
  }

  openModelAss() {

    this.setState({ openAss: !this.state.openAss })
  }


  loadCourse() {
    const { match, course, dispatch } = this.props
    if (!course.id) {
      dispatch(courseEditRequest(match.params.id, match.params.sid))
    }

  }


  renderList() {
    const { course, dataList } = this.props

    if (course.id) {
      return <TaskRow
        course={course}
      />
    }
  }

  render() {
    const { course, user } = this.props
    let mesg = ''
    if (course.status == 0) {
      mesg = 'Are you sure want to start ?';
    } else {
      mesg = 'Are you sure want to starts ?';
    }
    return <main className="dashboard-right" role="main">
      <div class="card"><div class="card-body bg-white">
        <LoadingComponent isLoading={this.props.meta.loading} error={''} />
        <h1>Course Details</h1>


        {this.state.openAss && <StatusModel
          openAss={this.state.openAss}
          openModelAss={this.openModelAss}
          taskId={course.id}
          title={'Course Confirmation'}
          discription={mesg}
          togglePublish={this.togglePublish}

        />}
        {
          user.rolename == 'student' ? course.status != 0 ? (

            <a href={'http://localhost/cwamanager/index.php?token=' + localStorage.getItem('access_token') + '&student=CWA/projects/' + course.path} target="blank">
              <Button

                size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
                <i class="fa fa-plus" aria-hidden="true"></i> Cpanel
        </Button > </a>
          ) : '' : ''}
        {
          user.rolename == 'student' ? course.status == 0 ? (
            <Button
              onClick={this.openModelAss}
              size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
              <i class="fa fa-plus" aria-hidden="true"></i> Start
            </Button >
          )
            :
            course.status == 1 ? (
              <span class="badge badge-primary">In-Progress</span>

            ) : (
              <span class="badge badge-primary">Completed</span>

                    
              ) : ''
        }

        {this.renderList()}
      </div>
      </div>
    </main>
  }
}

export default Page
