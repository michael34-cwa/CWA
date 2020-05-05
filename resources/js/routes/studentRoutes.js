// import modular routes
import webRoutes from "../modules/student/web/routes" 
import authRoutes from "../modules/auth/routes"
import coursesRoutes from "../modules/student/courses/routes";   
import userRoutes from "../modules/student/user/routes"
import notFoundRoutes from "../modules/notFoundRoutes"; 

export default [...webRoutes,...authRoutes,...userRoutes ,...coursesRoutes,...notFoundRoutes]
   