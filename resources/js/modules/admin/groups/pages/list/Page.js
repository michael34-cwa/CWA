// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { groupListRequest, groupUpdateRequest, groupRemoveRequest } from '../../service'
import { Button } from '@material-ui/core';
import LoadingComponent from '../../../../../common/loader'
// import components
import GroupRow from './components/GroupRow'
import Pagination from '../../../../../common/Pagination'
import Search from '../../../../../common/Search'
import { Link } from 'react-router-dom'
 
 import DeleteModel from '../../../../../common/model/DeleteModel'
  class Page extends Component { 
  static displayName = 'GroupPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    group: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.handleRemove = this.handleRemove.bind(this)
    this.pageChange = this.pageChange.bind(this)
    this.searchChange = this.searchChange.bind(this)
    this.openModel = this.openModel.bind(this) 
    this.state = { open: false, id: '', searchData: '', loadings: true  };

  }

  UNSAFE_componentWillMount() {
    this.setState({ loadings: true })
    const {match, dispatch } = this.props  
    let sid = match.params.sid;
    
        dispatch(groupListRequest({sid}))
        this.setState({ loadings: false }) 
  }

  pageChange = (event, pageNumber) => {  
    const { match, dispatch } = this.props
    const value = this.state.searchData;  
    let sid = match.params.sid; 
        this.props.dispatch(groupListRequest({ pageNumber, value, sid  })) 
  };
 
 
  
  searchChange(name, value) {
    const { match, dispatch } = this.props
    let sid = match.params.sid; 
    if (value.length >= 2) { 
      this.setState({ searchData: value }) 
  
    this.props.dispatch(groupListRequest({   value , sid})) 
    }else{
      this.setState({ searchData: '' }) 
    this.props.dispatch(groupListRequest({sid}))
    }
   
  }
  
  openModel(id) { 
    this.setState({ open: !this.state.open, id: id }) 
  }


  handleRemove(ids) {
    this.setState({ open: !this.state.open, id: ''  }) 
    this.props.dispatch(groupRemoveRequest(ids)) 
    this.props.dispatch(groupListRequest({ })) 
  }

  renderGroups(pageNo) {
 
    return this.props.group.map((group, index) => {
      
        return <GroupRow key={index}
          group={group}
          pageNo={pageNo++}
          index={index}
          togglePublish={this.togglePublish}
          openModel={this.openModel}
          handleRemove={this.handleRemove} />
    
    })

  }
  
  render() {
    const {match, dispatch } = this.props  
    let sid = match.params.sid;
     return ( 
      <main className="dashboard-right" role="main"> 
          <LoadingComponent isLoading={this.props.meta.loading} error={''} /> 
        <div className="card">
          <div className="card-body bg-white">
          <Button
          
              onClick={(e) => this.props.history.goBack()}
                    size="small" variant="contained" className="colorPrimary text-capitalize mb-2"  >
                    Back
        </Button > 
            <h1 class="text-center">Groups</h1>
            <div className="table-responsive">
              <Search onChange={this.searchChange} /> 
              <table className="table  table-striped">
          
                <thead className="thead-inverse">
                  <tr>
                    <th>Sr. No.</th>
                    <th>group Name</th>
                    <th>Created Date</th>
                    <th>Updated Date</th>
                    <th> 
                      <Link to={'/admin/groups/create/'+sid}>
                        <Button size="small" variant="contained" className="colorPrimary text-capitalize mx-1"  >
                          <i class="fa fa-plus" aria-hidden="true"></i>  Add
                        </Button >
                      </Link> 
                    </th>
                  
                  </tr>

                </thead>
                <tbody>
                  {this.props.group.length >= 1 ? this.renderGroups(this.props.meta.from) : <tr> <td colspan="5" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}</tbody>
              </table>
            </div>
            <Pagination meta={this.props.meta} onChange={this.pageChange} />
             {this.state.open && <DeleteModel openModel={this.openModel} opens={this.state.open} ids={this.state.id} handleRemove={this.handleRemove} />}

           </div>
        </div> 
          </main>
    );
  }
}

export default Page
