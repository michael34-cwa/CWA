// import lib
import { lazy } from 'react'

export default [
  {
    path: "/school_administrator",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/list/index"))
  },
  {
    path: "/school_administrator/create",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/add/index"))
  },
  {
    path: "/school_administrator/:id/edit",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/edit/index"))
  }
];
