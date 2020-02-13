import { combineReducers } from 'redux'
 
import auth from '../modules/auth/store/reduer'
import user from '../modules/user/store/reducer'
import course_categories from "../modules/admin/course_categories/store/reducer";
import courses from "../modules/admin/courses/store/reducer";
import tasks from "../modules/admin/tasks/store/reducer";
export default combineReducers({ auth, user, course_categories, courses, tasks });
