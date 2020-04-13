// import lib
import { lazy } from 'react'

export default [
  {
    path: "/admin/students/:id",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/list/index"))
  },
 
  {
    path: "/students/:id/edit",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/edit/index"))
  }
];
