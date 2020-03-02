import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paginations from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
 
class Paginationw extends Component {
  static displayName = 'Pagination'
  static propTypes = {
    meta: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      //
    }
  }

  renderLinks() {
    const { meta } = this.props    
    return <Paginations color="primary"  count={meta.lastPage} page={meta.currentPage} onChange={this.props.onChange} /> 
  }

  render() {
    return   <div>
        {this.renderLinks()}
      </div>
  
  }
}

export default Paginationw