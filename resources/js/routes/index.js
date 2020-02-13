// import libs
import React from 'react'
import { BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
// import components
import adminRoutes from './adminRoutes'
import PrivateRoute from './Private'
import PublicRoute from './Public'
import { connect } from 'react-redux'
import Layout from '../layout'
import { logout } from "../modules/auth/service";

 

const propTypes = {
  roleId: PropTypes.string,
  dispatch: PropTypes.func
}


const Routes = ({ roleId, dispatch}) => { 
  return  <Router>
    <Layout>
      <Switch> 
        {roleId == 'admin' ? 
        adminRoutes.map((route, i) => { 
          if (route.auth) {     
            return <PrivateRoute key={i} {...route} /> 
         //   dispatch(logout()); 
         //    return <Redirect to="/admin" /> 
          }
          return <PublicRoute key={i} {...route} />
        })
          : adminRoutes.map((route, i) => {  
            return <PublicRoute key={i} {...route} />
          })
          }
            
      </Switch>
    </Layout>
  </Router>
}

Routes.propTypes = propTypes
 
// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    roleId: store.user.rolename,
  }
}

export default connect(mapStateToProps)(Routes)