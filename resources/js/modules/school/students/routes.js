// import lib
import { lazy } from 'react'

export default [
  {
    path: "/students",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/list/index"))
  },
  {
    path: "/students/create",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/add/index"))
  },
  {
    path: "/students/:id/edit",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/edit/index"))
  }
];
