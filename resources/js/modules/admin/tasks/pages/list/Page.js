// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { taskListRequest, taskUpdateRequest, taskRemoveRequest } from '../../service'

// import components
import TaskRow from './components/TaskRow'
import Pagination from './components/Pagination'
import { Link } from 'react-router-dom'

class Page extends Component {
  static displayName = "TasksPage";
  static propTypes = {
    dataList: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.togglePublish = this.togglePublish.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.pageChange = this.pageChange.bind(this);
  }

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props;
     dispatch(taskListRequest({}));
  }

  pageChange(pageNumber) {
    this.props.dispatch(taskListRequest({ pageNumber }));
  }

  togglePublish(id) {
    const task = this.props.tasks.find(task => task.id === id);

    if (!task) return;
    if (task.isActive) {
      task.isActive = 0;
    } else {
      task.isActive = 1;
    }
     this.props.dispatch(taskUpdateRequest(task.toJson(),'1'));
  }

  handleRemove(id) {
    this.props.dispatch(taskRemoveRequest(id));
  }

  renderTasks() {
 
    return this.props.tasks.map((task, index) => {
      return (
        <TaskRow
          key={index}
          task={task}
          index={index}
          togglePublish={this.togglePublish}
          handleRemove={this.handleRemove}
        />
      );
    });
  }

  render() {
    return (
      <main className="dashboard-right" role="main">
        <h1>Tasks</h1>
        <div className="table-responsive">
          <table className="table  table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Sr. No.</th>
                <th>Task Name</th>
                {/* <th>Task Description</th> */}
                <th>Course Name</th>
                <th>Created Date</th>
                <th>Updated Date</th>
                <th>
                  <Link to="/tasks/create" className="btn btn-success">
                   <i class="fa fa-plus" aria-hidden="true"></i>  Add
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>{this.renderTasks()}</tbody>
          </table>
        </div>
        <Pagination meta={this.props.meta} onChange={this.pageChange} />
      </main>
    );
  }
}

export default Page
