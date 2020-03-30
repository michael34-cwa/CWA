// import modular routes
import webRoutes from "../modules/school/web/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/user/routes" 
// import teachersRoutes from "../modules/school/teachers/routes"
import studentsRoutes from "../modules/school/teachers/students/routes"
 
export default [...webRoutes, ...authRoutes, ...userRoutes, ...studentsRoutes]
