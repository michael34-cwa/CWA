// import modular routes
import webRoutes from "../modules/school/teachers/web/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/school/teachers/user/routes" 
// import teachersRoutes from "../modules/school/teachers/routes"
import studentsRoutes from "../modules/school/teachers/students/routes"
import notFoundRoutes from "../modules/notFoundRoutes"; 

export default [...webRoutes, ...authRoutes, ...userRoutes, ...studentsRoutes,...notFoundRoutes]
