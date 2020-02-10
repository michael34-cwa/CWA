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

 