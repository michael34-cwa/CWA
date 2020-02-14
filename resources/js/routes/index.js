// import libs
import React from 'react'
import { BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
// import components
import adminRoutes from './adminRoutes'
import schoolRoutes from './schoolRoutes'
import PrivateRoute from './Private'
import PublicRoute from './Public'
import { connect } from 'react-redux'
import Layout from '../layout' 

 

const propTypes = {
  roleId: PropTypes.string 
}

function roleaname(PropTypes){
  console.log(PropTypes);
 
}

const Routes = () => (
 
     <Router>
    <Layout>
      <Switch> 
        {roleaname()}
        {adminRoutes.map((route, i) => {
     
          if (route.auth) {
            return <PrivateRoute key={i} {...route} />
          }
          return <PublicRoute key={i} {...route} />
        })}
    
      </Switch>
    </Layout>
  </Router>
)

Routes.propTypes = propTypes
 
// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    roleId: store.user.rolename,
  }
}

export default connect(mapStateToProps)(Routes)