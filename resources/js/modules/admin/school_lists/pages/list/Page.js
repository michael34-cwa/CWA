// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { SchoolListListRequest, SchoolListUpdateRequest, SchoolListRemoveRequest } from '../../service'
import { Button } from '@material-ui/core';
import LoadingComponent from '../../../../../common/loader'
// import components
import SchoolListRow from './components/SchoolListRow'
import Pagination from '../../../../../common/Pagination'
import Search from '../../../../../common/Search'
import { Link } from 'react-router-dom'
 import DeleteModel from '../../../../../common/model/DeleteModel'
class Page extends Component { 
  static displayName = 'SchoolListPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    school_list: PropTypes.array.isRequired,
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

    dispatch(SchoolListListRequest({}))
  }

  pageChange = (event, pageNumber) => { 
    const value = this.state.searchData; 
    this.props.dispatch(SchoolListListRequest({ pageNumber, value })) 
  };
 
 
 

  togglePublish(id) {
    const school_list = this.props.school_list.find(school_list => school_list.user_id === id);

    if (!school_list) return;
    if (school_list.isActive) {
      school_list.isActive = 0;
    } else {
      school_list.isActive = 1;
    }
    this.props.dispatch(SchoolListUpdateRequest(school_list.toJson(), '1'));
    this.props.dispatch(SchoolListListRequest({}))
  }


  searchChange(name, value) {
    if (value.length >= 2) { 
      this.setState({ searchData: value }) 
  
      this.props.dispatch(SchoolListListRequest({   value })) 
    }else{
      this.setState({ searchData: '' }) 
      this.props.dispatch(SchoolListListRequest({}))
    }
   
  }
  
  openModel(id) { 
    this.setState({ open: !this.state.open, id: id }) 
  }


  handleRemove(id) {
    this.setState({ open: !this.state.open, id: ''  }) 
    this.props.dispatch(schoolListRemoveRequest(id))
  }

  renderSchoolList(pageNo) {
   
    return this.props.school_list.map((schoolList, index) => {
      
      return <SchoolListRow key={index}
        schoolList={schoolList}
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
            <h1 class="text-center">School Lists</h1>
            <div className="table-responsive">
              <Search onChange={this.searchChange} /> 
              <table className="table  table-striped school-list-table">
                <thead className="thead-inverse">
                  <tr>
                    <th>Sr. No.</th>
                    <th>Email</th>
                    <th>School Name</th>
                    <th>Phone</th>
                    <th>Created Date</th>
                    <th>Updated Date</th>
                    <th> 
                      <Link to="/admin/school_lists/create">
                        <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
                          <i class="fa fa-plus" aria-hidden="true"></i>  Add
                        </Button >
                      </Link> 
                    </th>
                  
                  </tr>

                </thead>
                <tbody>
                  {this.props.school_list.length >= 1 ? this.renderSchoolList(this.props.meta.from) : <tr> <td colspan="10" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}</tbody>
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
