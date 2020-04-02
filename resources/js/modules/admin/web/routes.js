// import lib
import { lazy } from 'react'

const routes = [
  {
    path: "/",
    exact: true,
    auth: true,
    component: lazy(() => import("../../auth/routes"))
  },

  {
    path: "/admin",
    exact: true,
    auth: true,
    component: lazy(() => import("./dashbord/index"))
  },
  
];

export default routes
