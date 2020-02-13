import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
 import CircularProgress from "@material-ui/core/CircularProgress";
const PublicRoutes = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => {   
    return (
      <Suspense
        fallback={
          <div className="d-flex align-items-center justify-content-center w-100">
            <CircularProgress />
          </div>
        }
      >
        <Component {...props} />
      </Suspense>
    );
  }}/>
}

PublicRoutes.propTypes = {
  // component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default PublicRoutes
