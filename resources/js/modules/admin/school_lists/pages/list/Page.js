// import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { categoryListRequest, categoryUpdateRequest, categoryRemoveRequest } from '../../service'
import { Button } from '@material-ui/core';
import LoadingComponent from '../../../../../common/loader'
// import components
import CategoryRow from './components/CategoryRow'
import Pagination from '../../../../../common/Pagination'
import Search from '../../../../../common/Search'
import { Link } from 'react-router-dom'
 
 import DeleteModel from '../../../../../common/model/DeleteModel'
class Page extends Component { 
  static displayName = 'CategoriesPage'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    course_categories: PropTypes.array.isRequired,
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

    dispatch(categoryListRequest({}))
  }

  pageChange = (event, pageNumber) => { 
    const value = this.state.searchData;
    console.log(this.state.searchData);
    this.props.dispatch(categoryListRequest({ pageNumber, value })) 
  };
 
 
 

  togglePublish(id) {
    const course_categories = this.props.course_categories.find(course_categories => course_categories.id === id);

    if (!course_categories) return;
    if (course_categories.isActive) {
      course_categories.isActive = 0;
    } else {
      course_categories.isActive = 1;
    }
    this.props.dispatch(categoryUpdateRequest(course_categories.toJson(), '1'));
  }


  searchChange(name, value) {
    if (value.length >= 2) { 
      this.setState({ searchData: value }) 
  
    this.props.dispatch(categoryListRequest({   value })) 
    }else{
      this.setState({ searchData: '' }) 
    this.props.dispatch(categoryListRequest({}))
    }
   
  }
  
  openModel(id) { 
    this.setState({ open: !this.state.open, id: id }) 
  }


  handleRemove(id) {
    this.setState({ open: !this.state.open, id: ''  }) 
    this.props.dispatch(categoryRemoveRequest(id))
  }

  renderCategories(pageNo) {
   
    return this.props.course_categories.map((category, index) => {
      
        return <CategoryRow key={index}
          category={category}
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
        <div className="card">
          <div className="card-body bg-white">
            <h1 class="text-center">School Lists</h1>
            <div className="table-responsive">
              <Search onChange={this.searchChange} /> 
              <table className="table  table-striped">
                <thead className="thead-inverse">
                  <tr>
                    <th>Sr. No.</th>
                    <th>School Name</th>
                    <th>Phone</th>
                    <th>School Address</th> 
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
                  {this.props.course_categories.length >= 1 ? this.renderCategories(this.props.meta.from) : <tr> <td colspan="10" className="text-center"><div className='nodata'>No Data Found</div></td> </tr>}</tbody>
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
