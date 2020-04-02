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
  }
];
