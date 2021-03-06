// import modular routes
import webRoutes from "../modules/admin/web/routes"
import authRoutes from "../modules/auth/routes"
import adminRoutes from "../modules/admin/user/routes"
import courseCtegoriesRoutes from "../modules/admin/course_categories/routes";
import coursesRoutes from "../modules/admin/courses/routes";
import tasksRoutes from "../modules/admin/tasks/routes";   
import schoolAdminRoutes from "../modules/school/school_admin/routesAdmin";
import schoolListsRoutes from "../modules/admin/school_lists/routes";
import assignCourseRoutes from "../modules/admin/assign_course/routes";
// import teachersRoutes from "../modules/school/teachers/routesAdmin";
import studentsRoutes from "../modules/school/students/routesAdmin";
import groupsRoutes from "../modules/admin/groups/routes"; 
import assinStuRoutes from "../modules/admin/assign_students/routes"; 
import assinGrupRoutes from "../modules/admin/group_course/routes"; 
import assignTaskRoutes from "../modules/admin/assign_task/routes"; 
// import assignTaskRoutes from "../modules/admin/time_logs/routes"; 
import notFoundRoutes from "../modules/notFoundRoutes"; 
export default [...webRoutes, ...authRoutes, ...adminRoutes,...courseCtegoriesRoutes, ...coursesRoutes, ...tasksRoutes, ...schoolAdminRoutes, ...schoolListsRoutes, ...assignCourseRoutes, ...studentsRoutes,...groupsRoutes,...assinStuRoutes,...assinGrupRoutes,...assignTaskRoutes, ...notFoundRoutes]
