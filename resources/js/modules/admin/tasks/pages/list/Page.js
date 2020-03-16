// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { taskListRequest, taskUpdateRequest, taskRemoveRequest } from '../../service'
import { Button } from '@material-ui/core';
// import components
import TaskRow from './components/TaskRow'
import Pagination from '../../../../../common/Pagination'
import Search from '../../../../../common/Search'
import { Link } from 'react-router-dom'
import DeleteModel from '../../../../../common/model/DeleteModel'
import LoadingComponent from '../../../../../common/loader'
class Page extends Component {
  static displayName = "TasksPage";
  static propTypes = {
    dataList: PropTypes.array,
    meta: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.togglePublish = this.togglePublish.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.pageChange = this.pageChange.bind(this);
    this.searchChange = this.searchChange.bind(this)
    this.openModel = this.openModel.bind(this)
    this.state = { open: false, id: '', searchData: '' };
  }

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props;
    dispatch(taskListRequest({}));
  }

  pageChange = (event, pageNumber) => {
    const value = this.state.searchData;
    this.props.dispatch(taskListRequest({ pageNumber, value}));
  }

  searchChange(name, value) {
    if (value.length >= 2) {
      this.setState({ searchData: value })
      this.props.dispatch(taskListRequest({ value }))
    } else {
      this.setState({ searchData: '' })
      this.props.dispatch(taskListRequest({}))
    }

  }


  openModel(id) {
    this.setState({ open: !this.state.open, id: id })
  }


  togglePublish(id) {
    const task = this.props.tasks.find(task => task.id === id);

    if (!task) return;
    if (task.isActive) {
      task.isActive = 0;
    } else {
      task.isActive = 1;
    }
    this.props.dispatch(taskUpdateRequest(task.toJson(), '1'));
  }

  handleRemove(id) {
    this.setState({ open: !this.state.open, id: '' }) 
    this.props.dispatch(taskRemoveRequest(id));
  }

  renderTasks(pageNo) {

    return this.props.tasks.map((task, index) => {
      return (
        <TaskRow
          key={index}
          task={task}
          pageNo={pageNo++}
          index={index}
          togglePublish={this.togglePublish}
          openModel={this.openModel}
          handleRemove={this.handleRemove}
        />
      );
    });
  }

  render() {
    return (

      <main className="dashboard-right" role="main">
        <LoadingComponent isLoading={this.props.meta.loading} error={''} /> 
        <div className="card">
          <div className="card-body bg-white">
            <h1 class="text-center">Tasks</h1>
            <div className="table-responsive">
              <Search onChange={this.searchChange} /> 
              <table className="table  table-striped">
                <thead className="thead-inverse">
                  <tr>
                    <th>Sr. No.</th>
                    <th>Task Name</th>
                    <th>Course Name</th>
                    <th>Created Date</th>
                    <th>Updated Date</th>
                    <th>
                      <Link to="/admin/tasks/create">
                        <Button
                          size="small"
                          variant="contained"
                          className="text-capitalize colorPrimary mx-1"
                        >
                          <i class="fa fa-plus" aria-hidden="true"></i>  Add
                      </Button >
                      </Link>


                    </th>
                  </tr>
                </thead>
                {this.props.tasks.length >= 1 ? this.renderTasks(this.props.meta.from) : <tr> <td colspan="5" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}

              </table>
            </div>
            <Pagination meta={this.props.meta} onChange={this.pageChange} />
            {this.state.open && <DeleteModel openModel={this.openModel} opens={this.state.open} id={this.state.id} handleRemove={this.handleRemove} />}

          </div>
        </div>

      </main>


    );
  }
}

export default Page
