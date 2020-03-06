// import modular routes
import webRoutes from "../modules/admin/web/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/user/routes"
import courseCtegoriesRoutes from "../modules/admin/course_categories/routes";
import coursesRoutes from "../modules/admin/courses/routes";
import tasksRoutes from "../modules/admin/tasks/routes";   
import schoolAdminRoutes from "../modules/school/school_admin/routesAdmin";
import schoolListsRoutes from "../modules/admin/school_lists/routes";
export default [...webRoutes, ...authRoutes, ...userRoutes, ...courseCtegoriesRoutes, ...coursesRoutes, ...tasksRoutes, ...schoolAdminRoutes, ...schoolListsRoutes]
