// import modular routes
import webRoutes from "../modules/web/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/user/routes"
import articleRoutes from "../modules/article/routes"
import courseCtegoriesRoutes from "../modules/course_categories/routes";
import coursesRoutes from "../modules/courses/routes"; 
import tasksRoutes from "../modules/tasks/routes";  
export default [...webRoutes, ...authRoutes, ...userRoutes, ...articleRoutes, ...courseCtegoriesRoutes, ...coursesRoutes, ...tasksRoutes]
  