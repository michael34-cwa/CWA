/* ============
 * Actions for the task module
 * ============
 *
 * The actions that are available on the
 * task module.
 */

import {
  TASK_ADD,
  TASK_UPDATE,
  TASK_REMOVE,
  TASK_LIST,
  COURSE_LIST,
} from "./action-types";

export function add(payload) {
  return {
    type: TASK_ADD,
    payload
  }
}

export function update(payload) {
  return {
    type: TASK_UPDATE,
    payload
  }
}

export function remove(payload) {
  return {
    type: TASK_REMOVE,
    payload
  }
}

export function list(payload) {
  return {
    type: TASK_LIST,
    payload
  }
}
export function courseList(payload) {
 
  return {
    type: COURSE_LIST,
    payload
  };
}