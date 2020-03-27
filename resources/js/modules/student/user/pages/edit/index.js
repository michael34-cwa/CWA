/* ============
 * Container
 * ============.
 *
 * Containers are used fetch the data from state
 * and disperse to the components.
 */

// import libs
import { connect } from 'react-redux'
import User from '../../User'

// import components
import Page from './Page'

// map store state as properties of the component
const mapStateToProps = state => {   
  return {
    project_user: new User(state.admin_user)
  }
}

// binding store with component
export default connect(mapStateToProps)(Page)
