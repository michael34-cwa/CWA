/* ============
 * Actions for the COURSE module
 * ============
 *
 * The actions that are available on the
 * COURSE module.
 */

import {
  COURSE_ADD,
  COURSE_UPDATE,
  COURSE_REMOVE,
  COURSE_LIST,
  CATEGORY_LIST,
  SPINNER_ADD,
} from "./action-types";

export function add(payload) {
  return {
    type: COURSE_ADD,
    payload
  }
}

export function update(payload) {
  return {
    type: COURSE_UPDATE,
    payload
  }
}

export function remove(payload) {
  return {
    type: COURSE_REMOVE,
    payload
  }
}

export function list(payload) {
  return {
    type: COURSE_LIST,
    payload
  }
}
export function spinerAdd(payload) {
  return {
    type: SPINNER_ADD,
    payload
  }
}
export function catList(payload) {
 
  return {
    type: CATEGORY_LIST,
    payload
  };
}