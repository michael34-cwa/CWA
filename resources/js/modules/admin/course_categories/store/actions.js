/* ============
 * Actions for the CATEGORY module
 * ============
 *
 * The actions that are available on the
 * CATEGORY module.
 */

import {
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE,
  CATEGORY_LIST,
  SPINNER_ADD,
  SPINNER_REMOVE
} from './action-types';
 
export function add(payload) {
  return {
    type: CATEGORY_ADD,
    payload
  }
}

export function update(payload) {
  return {
    type: CATEGORY_UPDATE,
    payload
  }
}

export function remove(payload) {
  return {
    type: CATEGORY_REMOVE,
    payload
  }
}

export function list(payload) {
  return {
    type: CATEGORY_LIST,
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