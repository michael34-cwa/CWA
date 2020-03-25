// import libs
import { connect } from 'react-redux'

// import components
import Page from './Page' 

const mapStateToProps = (state, router) => {  
  return {
    isAuthenticated: state.auth.isAuthenticated, 
    routeNameType: router.location.pathname
  }
}

export default connect(mapStateToProps)(Page)
