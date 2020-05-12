// import lib
import { lazy } from 'react'

export default [
  {
    path: "/courses",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/list/index"))
  }, 
  // {
  //   path: "/course_tasks/:id/:sid",
  //   exact: true,
  //   auth: true,
  //   component: lazy(() => import("./pages/taskList/index"))
  // },
  {
  path: "/task_details/:cid/:tid",
  exact: true,
  auth: true,
  component: lazy(() => import("./pages/taskDetails/index"))
  }
];
