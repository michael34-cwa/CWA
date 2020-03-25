// import libs
import { connect } from 'react-redux'
import ProjectAdmin from '../../ProjectAdmin'

// import components
import Page from './Page'

const mapStateToProps = state => {
  
  const { data, ...meta } = state.project_admin

  return {
    project_admin: data.map((projectAdmin) => new ProjectAdmin(projectAdmin)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)
