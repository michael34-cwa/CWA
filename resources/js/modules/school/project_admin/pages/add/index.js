import { connect } from 'react-redux'
import ProjectAdmin from '../../ProjectAdmin'

// import components test
import Page from './Page'

const mapStateToProps = () => {
  const project_admin = new ProjectAdmin({})
  return {
    project_admin
  }
}
export default connect(mapStateToProps)(Page)
