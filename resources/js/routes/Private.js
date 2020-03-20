import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import CircularProgress from "@material-ui/core/CircularProgress";

const PrivateRoute = ({ component: Component, isAuthenticated, roleId, ...rest }) => {
  let logoutUrl = ''; 

  if (roleId == 'admin') {
    logoutUrl = '/admin/login'
  } else {
    logoutUrl = '/login'
  }
 
  return <Route {...rest} render={props => {

    return (
      <Suspense
        fallback={
          <div className="pageloader">
            <CircularProgress />
          </div>
        }
      >
        {isAuthenticated ? ( 
          <Component {...props} />
        ) : (
          //  window.location = logoutUrl
    
            <Redirect to={{
                    pathname: logoutUrl,
                    state: { from: props.location },
                    }}/>
             /* // <Redirect
            //   to={{
            //     pathname: roleId,
            //     state: { from: props.location }
            //   }}
            // />    */ 
     )}
      </Suspense>
    );
     
  }} />
  
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
  roleId: PropTypes.string,
}

// Retrieve data from store as props
function mapStateToProps(store) { 
  return {

    isAuthenticated: store.auth.isAuthenticated,
    roleId: store.user.rolename,
  }
}

export default connect(mapStateToProps)(PrivateRoute)
