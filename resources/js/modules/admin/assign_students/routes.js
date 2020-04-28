// import lib
import { lazy } from 'react'

export default [
  {
    path: "/admin/group_students/:id/:sid",
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
