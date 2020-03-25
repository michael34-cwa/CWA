/* ============
 * Actions for the CATEGORY module
 * ============
 *
 * The actions that are available on the
 * CATEGORY module.
 */

import {
ASSIGN_COURSE_ADD,
ASSIGN_COURSE_UPDATE,
ASSIGN_COURSE_REMOVE,
ASSIGN_COURSE_LIST,
  SPINNER_ADD,
  SPINNER_REMOVE,
  COURSE_SCHOOL_LIST
} from './action-types';
 
export function add(payload) {
  return {
    type: ASSIGN_COURSE_ADD,
    payload
  }
}

export function update(payload) {
  return {
    type: ASSIGN_COURSE_UPDATE,
    payload
  }
}

export function remove(payload) {
  return {
    type: ASSIGN_COURSE_REMOVE,
    payload
  }
}

export function courseSchoolList(payload) {
  return {
    type: COURSE_SCHOOL_LIST,
    payload
  }
}

export function list(payload) {
  return {
    type: ASSIGN_COURSE_LIST,
    payload
  }
}


export function spinerAdd(payload) {
  return {
    type: SPINNER_ADD,
    payload
  }
}

export function spinerRemove(payload) {
  return {
    type: SPINNER_REMOVE,
    payload
  } 
}