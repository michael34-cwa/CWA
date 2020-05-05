// import lib
import { lazy } from 'react'

export default [
  

  {
    path: "/admin/login",
    exact: true,
    component: lazy(() => import("./pages/login/index"))
  },
  {
    path: "/login",
    exact: true,
    component: lazy(() => import("./pages/login/index"))
  },
  {
    path: "/",
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
