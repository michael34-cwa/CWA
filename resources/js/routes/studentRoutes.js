// import modular routes
import webRoutes from "../modules/student/web/routes" 
import authRoutes from "../modules/auth/routes"
import coursesRoutes from "../modules/student/courses/routes";   
import userRoutes from "../modules/student/user/routes" 
export default [...webRoutes,...authRoutes,...userRoutes ,...coursesRoutes]
   