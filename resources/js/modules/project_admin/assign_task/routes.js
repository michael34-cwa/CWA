// import lib
import { lazy } from 'react'

export default [
  {
    path: "/assign_task/:id",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/list/index"))
  },
  // {
  //   path: "/admin/course_assign/create",
  //   exact: true,
  //   auth: true,
  //   component: lazy(() => import("./pages/add/index"))
  // },
  // {
  //   path: "/admin/course_assign/:id/edit",
  //   exact: true,
  //   auth: true,
  //   component: lazy(() => import("./pages/edit/index"))
  // }
];
