// import lib
import { lazy } from 'react'

export default [
  {
    path: "/admin/groups/:sid",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/list/index"))
  },
  {
    path: "/admin/groups/create/:sid",
    exact: true,
    auth: true, 
    component: lazy(() => import("./pages/add/index"))
  },
  {
    path: "/admin/groups/:id/edit",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/edit/index"))
  }
];
