/* ============
 * Actions for the CATEGORY module
 * ============
 *
 * The actions that are available on the
 * CATEGORY module.
 */

import {
  PROJECT_ADMIN_ADD,
  PROJECT_ADMIN_UPDATE,
  PROJECT_ADMIN_REMOVE,
  PROJECT_ADMIN_LIST,
  SPINNER_ADD,
  SPINNER_REMOVE
} from './action-types';
 
export function add(payload) {
  return {
    type: PROJECT_ADMIN_ADD,
    payload
  }
}

export function update(payload) {
  return {
    type: PROJECT_ADMIN_UPDATE,
    payload
  }
}

export function remove(payload) {
  return {
    type: PROJECT_ADMIN_REMOVE,
    payload
  }
}

export function list(payload) {
  return {
    type: PROJECT_ADMIN_LIST,
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