// import modular routes
import webRoutes from "../modules/school/web/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/user/routes"
import schoolAdminRoutes from "../modules/school/school_admin/routes"
import teachersRoutes from "../modules/school/teachers/routes"
import studentsRoutes from "../modules/school/students/routes"
import schoolCoursesRoutes from "../modules/school/courses/routes";

export default [...webRoutes, ...authRoutes, ...userRoutes, ...schoolAdminRoutes, ...teachersRoutes, ...studentsRoutes, ...schoolCoursesRoutes]
