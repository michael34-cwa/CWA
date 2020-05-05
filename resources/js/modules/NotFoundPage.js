import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import PageNotFound from '../assets/images/PageNotFound';
class NotFoundPage extends Component {
    render(){  
        return  <div className="dashboard-right">
        <div class="card">
          <div class="card-body bg-white">
          <div id="notfound">
 
          <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div class="error-actions">
                    
                <Link to="/" className="btn btn-primary btn-lg">   <span class="glyphicon glyphicon-home"></span>
                   Go to Home </Link>  

                </div>
                
            </div>

          
          </div> </div></div> </div>;
    }
}

export default NotFoundPage