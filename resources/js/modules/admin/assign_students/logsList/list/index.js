// import libs
import { connect } from 'react-redux' 
 import Logsist from '../../LogsList'
// import components
import Page from './Page'

const mapStateToProps = state => { 

  const { data, ...meta } = state.tasks 
 
  return {
    log_lists: data.map((Logsists) => new Logsist(Logsists)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)
