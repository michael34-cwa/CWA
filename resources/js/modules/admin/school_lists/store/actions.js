/* ============
 * Actions for the CATEGORY module
 * ============
 *
 * The actions that are available on the
 * CATEGORY module.
 */

import {
  SCHOOL_LIST_ADD,
  SCHOOL_LIST_UPDATE,
  SCHOOL_LIST_REMOVE,
  SCHOOL_LIST_LIST,
  SPINNER_ADD,
  SPINNER_REMOVE
} from './action-types';
 
export function add(payload) {
  return {
    type: SCHOOL_LIST_ADD,
    payload
  }
}

export function update(payload) {
  return {
    type: SCHOOL_LIST_UPDATE,
    payload
  }
}

export function remove(payload) {
  return {
    type: SCHOOL_LIST_REMOVE,
    payload
  }
}

export function list(payload) {
  return {
    type: SCHOOL_LIST_LIST,
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