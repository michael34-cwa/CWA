// import modular routes
import webRoutes from "../modules/school/web/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/school/user/routes"
import schoolAdminRoutes from "../modules/school/school_admin/routes"
import teachersRoutes from "../modules/school/teachers/routes"
import studentsRoutes from "../modules/school/students/routes"
import schoolCoursesRoutes from "../modules/school/courses/routes";
import projectAdminRoutes from "../modules/school/project_admin/routes";
import notFoundRoutes from "../modules/notFoundRoutes"; 

export default [...webRoutes, ...authRoutes, ...userRoutes, ...schoolAdminRoutes, ...teachersRoutes, ...studentsRoutes, ...schoolCoursesRoutes, ...projectAdminRoutes,...notFoundRoutes]
 