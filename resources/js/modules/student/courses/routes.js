// import lib
import { lazy } from 'react'

export default [
  {
    path: "/courses",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/list/index"))
  }, 
  {
    path: "/tasks/:id/view",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/taskList/index"))
  }
];
