import { combineReducers } from 'redux'

import auth from '../modules/auth/store/reduer'
import user from '../modules/user/store/reducer'
import articles from '../modules/article/store/reducer'
import course_categories from "../modules/course_categories/store/reducer";
import courses from "../modules/courses/store/reducer";
import tasks from "../modules/tasks/store/reducer";
export default combineReducers({ auth, user, articles, course_categories, courses, tasks});
