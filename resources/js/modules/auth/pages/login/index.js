// import libs
import { connect } from 'react-redux'

// import components
import Page from './Page'

const mapStateToProps = state => { 
  console.log('this.props');
  
  return {
    isAuthenticated: state.auth.isAuthenticated, 
  }
}

export default connect(mapStateToProps)(Page)
