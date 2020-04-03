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
    path: "/courses/:id",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/listCorse/index"))
  },

  {
    path: "/course_tasks/:id/:sid",
    exact: true,
    auth: true,
    component: lazy(() => import("../../../student/courses/pages/taskList/index"))
  },
  {
    path: "/task_details/:cid/:id/:sid",
  exact: true,
  auth: true,
  component: lazy(() => import("../../../student/courses/pages/taskDetails/index"))
  }
];
