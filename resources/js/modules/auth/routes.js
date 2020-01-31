// import lib
import { lazy } from 'react'

export default [
  {
    path: "/admin",
    exact: true,
    component: lazy(() => import("./pages/login/index"))
  },
  {
    path: "/register",
    exact: true,
    component: lazy(() => import("./pages/register/index"))
  },
  {
    path: "/reset",
    exact: true,
    component: lazy(() => import("./pages/forgot/index"))
  }
];
