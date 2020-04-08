import { connect } from 'react-redux'
import ProjectAdmin from '../../ProjectAdmin'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {  
 
  
  const { params} = router.match
  const project_admin = state.project_admin.data.find(project_admin => project_admin.id == window.atob(params.id))
  return {
    project_admin: project_admin ? new ProjectAdmin(project_admin) : new ProjectAdmin({}), 
  }
}

export default connect(mapStateToProps)(Page)
