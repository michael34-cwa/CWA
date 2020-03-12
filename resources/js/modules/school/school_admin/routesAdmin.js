// import lib
import { lazy } from 'react'

export default [
  {
    path: "/admin/school_administrator/:id",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/list/index"))
  },
 
  {
    path: "/admin/school_administrator/:id/edit",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/edit/index"))
  }
];
