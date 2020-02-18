import { combineReducers } from 'redux'
 
import auth from '../modules/auth/store/reduer'
import user from '../modules/user/store/reducer'
import course_categories from "../modules/admin/course_categories/store/reducer";
import courses from "../modules/admin/courses/store/reducer";
import tasks from "../modules/admin/tasks/store/reducer";
import school_admin from "../modules/school/school_admin/store/reducer";
import teachers from "../modules/school/teachers/store/reducer";
import students from "../modules/school/students/store/reducer";
export default combineReducers({ auth, user, course_categories, courses, tasks, school_admin, teachers, students });
