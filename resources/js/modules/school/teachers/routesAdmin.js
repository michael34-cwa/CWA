// import lib
import { lazy } from 'react'

export default [
  {
    path: "/admin/teachers/:id",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/list/index"))
  },
 
  {
    path: "/teachers/:id/edit",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/edit/index"))
  }
];
