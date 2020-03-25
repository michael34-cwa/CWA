import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import CircularProgress from "@material-ui/core/CircularProgress";

const Logout = ({ auth }) => {
   
     
        return (
            window.location = 'login'
        );

 
}

// LogOut.propTypes = {
//     component: PropTypes.func.isRequired,
//     location: PropTypes.object,
//     isAuthenticated: PropTypes.bool.isRequired,
//     roleId: PropTypes.string,
// }

// // Retrieve data from store as props
// function mapStateToProps(store) {
//     return {

//         isAuthenticated: store.auth.isAuthenticated,
//         roleId: store.user.rolename,
//     }
// }

//export default connect(mapStateToProps)(LogOut)
export default Logout