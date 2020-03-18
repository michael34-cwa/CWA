// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { ProjectAdminListRequest, ProjectAdminUpdateRequest, ProjectAdmintRemoveRequest } from '../../service'
import { Button } from '@material-ui/core';
import LoadingComponent from '../../../../../common/loader'
// import components
import ProjectAdminRow from './components/ProjectAdminRow'
import Pagination from '../../../../../common/Pagination'
import Search from '../../../../../common/Search'
import { Link } from 'react-router-dom'
 import DeleteModel from '../../../../../common/model/DeleteModel'
class Page extends Component { 
  static displayName = 'ProjectAdminPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    project_admin: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.togglePublish = this.togglePublish.bind(this);
    this.handleRemove = this.handleRemove.bind(this)
    this.pageChange = this.pageChange.bind(this)
    this.searchChange = this.searchChange.bind(this)
    this.openModel = this.openModel.bind(this) 
    this.state = { open: false, id: '', searchData: ''  };

  }

  UNSAFE_componentWillMount() {
    const { dispatch } = this.props

    dispatch(ProjectAdminListRequest({}))
  }

  pageChange = (event, pageNumber) => { 
    const value = this.state.searchData; 
    this.props.dispatch(ProjectAdminListRequest({ pageNumber, value })) 
  };
 
 
 

  togglePublish(id) {
    const project_admin = this.props.project_admin.find(project_admin => project_admin.user_id === id);

    if (!project_admin) return;
    if (project_admin.isActive) {
      project_admin.isActive = 0;
    } else {
      project_admin.isActive = 1;
    }
    this.props.dispatch(ProjectAdminUpdateRequest(project_admin.toJson(), '1'));
    this.props.dispatch(ProjectAdminListRequest({}))
  }


  searchChange(name, value) {
    if (value.length >= 2) { 
      this.setState({ searchData: value }) 
  
      this.props.dispatch(ProjectAdminListRequest({   value })) 
    }else{
      this.setState({ searchData: '' }) 
      this.props.dispatch(ProjectAdminListRequest({}))
    }
   
  }
  
  openModel(id) { 
    this.setState({ open: !this.state.open, id: id }) 
  }


  handleRemove(id) {
    this.setState({ open: !this.state.open, id: ''  }) 
    this.props.dispatch(ProjectAdminRemoveRequest(id))
  }

  renderProjectAdmin(pageNo) {
 
    return this.props.project_admin.map((projectAdmin, index) => {
      
      return <ProjectAdminRow key={index}
        projectAdmin={projectAdmin}
          pageNo={pageNo++}
          index={index}
          togglePublish={this.togglePublish}
          openModel={this.openModel}
          handleRemove={this.handleRemove} />
    
    })

  }
  render() {
 
    return (
      <main className="dashboard-right" role="main">
        <LoadingComponent isLoading={this.props.meta.loading} error={''} /> 
        <div className="card">
          <div className="card-body bg-white">
            <h1 class="text-center">Project Admin Lists</h1>
            <div className="table-responsive">
              <Search onChange={this.searchChange} /> 
              <table className="table  table-striped">
                <thead className="thead-inverse">
                  <tr>
                    <th>Sr. No.</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Created Date</th>
                    <th>Updated Date</th>
                    <th> 
                      <Link to="/project_admin/create">
                        <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
                          <i class="fa fa-plus" aria-hidden="true"></i>  Add
                        </Button >
                      </Link> 
                    </th>
                  
                  </tr>

                </thead>
                <tbody>
                  {this.props.project_admin.length >= 1 ? this.renderProjectAdmin(this.props.meta.from) : <tr> <td colspan="10" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}</tbody>
              </table>
            </div>
            <Pagination meta={this.props.meta} onChange={this.pageChange} />
            {/* {this.state.open && <DeleteModel openModel={this.openModel} opens={this.state.open} id={this.state.id} handleRemove={this.handleRemove} />} */}

           </div>
        </div> 
          </main>
    );
  }
}

export default Page
