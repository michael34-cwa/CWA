// import lib
import { lazy } from 'react'

const routes = [
  {
    path: "/",
    exact: true,
    auth: true,
    component: lazy(() => import("./dashbord/index"))
  },

  {
    path: "/admin",
    exact: true,
    auth: true,
    component: lazy(() => import("./dashbord/index"))
  },
  // {
  //   path: "/*",  
  //   exact: true,
  //   auth: true,
  //   component: lazy(() => import("../../NotFoundPage"))
  // },
];

export default routes
