// import lib
import { lazy } from 'react'

const routes = [
  {
    path: "/",
    exact: true,
    auth: true,
    component: lazy(() => import("./dashbord/index"))
  }, 
  
];

export default routes
