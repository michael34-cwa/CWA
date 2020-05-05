// import modular routes
import webRoutes from "../modules/project_admin/web/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/project_admin/user/routes" 
import studentsRoutes from "../modules/project_admin/students/routes"
import assignCourseRoutes from "../modules/project_admin/assign_course/routes"
import assignTaskRoutes from "../modules/project_admin/assign_task/routes"
import notFoundRoutes from "../modules/notFoundRoutes"; 
export default [...webRoutes, ...authRoutes, ...userRoutes, ...studentsRoutes, ...assignCourseRoutes, ...assignTaskRoutes,...notFoundRoutes]
 