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


const Routes = ({ roleId, isAuthenticated}) => { 

  return <Router>
    <Layout>
      <Switch>
 
        {
          isAuthenticated == false && 
          
           roleId == 'admin' ?
              adminRoutes.map((route, i) => {   
                  if (route.auth) {
                    return <PrivateRoute key={i} {...route} />
                  }
                  return <PublicRoute key={i} {...route} />
                }) 
            : roleId == 'school' ?
              schoolRoutes.map((route, i) => {
                if (route.auth) {
                  return <PrivateRoute key={i} {...route} />
                }
                return <PublicRoute key={i} {...route} />
              }) 
              : roleId == 'student' ?
                studentRoutes.map((route, i) => {
                  if (route.auth) {
                    return <PrivateRoute key={i} {...route} />
                  }
                  return <PublicRoute key={i} {...route} />
                })
                : roleId == 'teacher' ?
                  teacherRoutes.map((route, i) => {
                    if (route.auth) {
                      return <PrivateRoute key={i} {...route} />
                    }
                    return <PublicRoute key={i} {...route} />
                  })
                  : roleId == 'project_Admin' ?
                    projectAdminRoutes.map((route, i) => {
                      if (route.auth) {
                        return <PrivateRoute key={i} {...route} />
                      }
                      return <PublicRoute key={i} {...route} />
                    })
                    : 
               isAuthenticated == false &&  
              authRoutes.map((route, i) => {
                return <PublicRoute key={i} {...route} />
              })

        
              }
         
       


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
  }
}

export default connect(mapStateToProps)(Routes)