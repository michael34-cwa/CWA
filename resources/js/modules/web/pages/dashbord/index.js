import React, { Component } from "react";
 
class dashBord extends Component {


    constructor(props) {
        super(props);
 
    }

 
    render() {
        return (
          <div class="dashboard-right">
            <div class="row mb-20">
              <div class="col-lg-3 col-sm-6">
                <div class="card gradient-1">
                  <div class="card-body">
                    <h3 class="card-title text-white">Products Sold</h3>
                    <div class="d-inline-block">
                      <h2 class="text-white">4565</h2>
                      <p class="text-white mb-0">Jan - March 2019</p>
                    </div>
                    <span class="float-right display-5 opacity-5">
                      <i class="fa fa-shopping-cart"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="card gradient-2">
                  <div class="card-body">
                    <h3 class="card-title text-white">Net Profit</h3>
                    <div class="d-inline-block">
                      <h2 class="text-white">$ 8541</h2>
                      <p class="text-white mb-0">Jan - March 2019</p>
                    </div>
                    <span class="float-right display-5 opacity-5">
                      <i class="fa fa-money"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="card gradient-3">
                  <div class="card-body">
                    <h3 class="card-title text-white">New Customers</h3>
                    <div class="d-inline-block">
                      <h2 class="text-white">4565</h2>
                      <p class="text-white mb-0">Jan - March 2019</p>
                    </div>
                    <span class="float-right display-5 opacity-5">
                      <i class="fa fa-users"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-6">
                <div class="card gradient-4">
                  <div class="card-body">
                    <h3 class="card-title text-white">Customer Satisfaction</h3>
                    <div class="d-inline-block">
                      <h2 class="text-white">99%</h2>
                      <p class="text-white mb-0">Jan - March 2019</p>
                    </div>
                    <span class="float-right display-5 opacity-5">
                      <i class="fa fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
           
            <div class="row boxessection mb-20">
                    <div class="col-lg-4 col-sm-6">
                        <div class="card ">
                            <div class="card-body">
                                <div class="text-center">
                                <i class="fa fa-tachometer" aria-hidden="true"></i>
                                <h2> Dashboard</h2>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="card ">
                            <div class="card-body">
                                <div class="text-center">
                                  <i class="fa fa-cog" aria-hidden="true"></i>
                                <h2>  Course Categories</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="text-center">
                                  <i class="fa fa-globe" aria-hidden="true"></i>
                                <h2> Course</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                   <div class="row mb-20">
                   <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                            <h3>Course Categories</h3>
                            <p>You can add edit and update your Course Categories</p>
                            </div>
                            </div>
                            </div>
                             </div>
                
          </div>
        );
    }
}

export default dashBord;
