// import libs
import React from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
// import components
import authRoutes from './authRoutes'
import adminRoutes from './adminRoutes'
import schoolRoutes from './schoolRoutes'
import studentRoutes from './studentRoutes'
import teacherRoutes from './teacherRoutes' 
import projectAdminRoutes from './projectAdminRoutes'
import PrivateRoute from './Private'
import PublicRoute from './Public'
import { connect } from 'react-redux'
import Layout from '../layout'



const propTypes = {
  roleId: PropTypes.string,
  dispatch: PropTypes.func
}


const Routes = ({ roleId, isAuthenticated, logRoles}) => { 
 
  return <Router>
    <Layout>
      <Switch>
 
        {/* {
          isAuthenticated == false && logRoles == 'admin'
          authRoutes.map((route, i) => {
            if (route.auth){  
                return <PrivateRoute key={i} {...route} />
              } 
              return <PublicRoute key={i} {...route} />
      
          })
        } */}


        { 
          isAuthenticated == true && roleId == 'admin' &&
            adminRoutes.map((route, i) => {   
              return <PrivateRoute key={i} {...route} />
            }) 

        }  

 
 
        {
          isAuthenticated == true &&   roleId == 'school' &&
            schoolRoutes.map((route, i) => { 
              return <PrivateRoute key={i} {...route} />
            }) 
        }

        {
          isAuthenticated == true &&  roleId == 'student' &&
            studentRoutes.map((route, i) => { 
              return <PrivateRoute key={i} {...route} />
            }) 
        }

        {
          isAuthenticated == true &&  roleId == 'teacher' &&
            teacherRoutes.map((route, i) => {
              return <PrivateRoute key={i} {...route} />
            }) 
        }

        {
          isAuthenticated == true &&   roleId == 'project_admin' &&
            projectAdminRoutes.map((route, i) => {
              return <PrivateRoute key={i} {...route} />
            }) 
        }  


       
      </Switch>
    </Layout>
  </Router>
}

Routes.propTypes = propTypes

// Retrieve data from store as props
function mapStateToProps(store) { 
  let roleId = '';
  if (store.auth.rolesCheck == '') {
    roleId = store.user.rolename;
  } else {
    roleId = store.auth.rolesCheck;
  }
  return {
    isAuthenticated: store.auth.isAuthenticated,
    roleId: roleId,
    logRoles: store.auth.logRole,
  }
}

export default connect(mapStateToProps)(Routes)