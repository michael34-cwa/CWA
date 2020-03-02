import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paginations from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
 class Pagination extends Component {
  static displayName = 'Pagination'

  
  constructor(props) {
    super(props)

    this.state = {
      //
    }
  }

  renderLinks() {
    const { meta } = this.props
    console.log(this.props);
 
    if ( meta.total >  meta.perPage) {
      return <Paginations variant="outlined" color="primary" count={meta.lastPage} page={meta.currentPage} onChange={this.props.onChange} />
      
    }
  }

  render() {
    return <div>

      {this.renderLinks()}
    </div>

  }
}

export default Pagination
