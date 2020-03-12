// import modular routes
import webRoutes from "../modules/admin/web/routes"
import authRoutes from "../modules/auth/routes"
import userRoutes from "../modules/user/routes"
import courseCtegoriesRoutes from "../modules/admin/course_categories/routes";
import coursesRoutes from "../modules/admin/courses/routes";
import tasksRoutes from "../modules/admin/tasks/routes";   
import schoolAdminRoutes from "../modules/school/school_admin/routesAdmin";
import schoolListsRoutes from "../modules/admin/school_lists/routes";
import assignCourseRoutes from "../modules/admin/assign_course/routes";
import teachersRoutes from "../modules/school/teachers/routesAdmin";
export default [...webRoutes, ...authRoutes, ...userRoutes, ...courseCtegoriesRoutes, ...coursesRoutes, ...tasksRoutes, ...schoolAdminRoutes, ...schoolListsRoutes, ...assignCourseRoutes, ...teachersRoutes]
