// import lib
import { lazy } from 'react'

const routes = [
  {
    path: "/",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/home/index"))
  },
  {
    path: "/blog",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/blog/list/index"))
  },
  {
    path: "/blog/:slug",
    exact: true,
    auth: true,
    component: lazy(() => import("./pages/blog/details/index"))
  }
];

export default routes
