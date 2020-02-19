// import modular routes
import webRoutes from "../modules/student/web/routes" 
import coursesRoutes from "../modules/student/courses/routes";   
export default [...webRoutes, ...coursesRoutes]
 