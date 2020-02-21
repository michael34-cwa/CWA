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
    path: "/course_tasks/:id",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/taskList/index"))
  },
  {
  path: "/task_details/:id",
  exact: true,
  auth: true,
  component: lazy(() => import("./pages/taskDetails/index"))
  }
];
