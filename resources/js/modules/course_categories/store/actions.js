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
import { toast } from "react-toastify";

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

export function incrementAction() {
  return function(dispatch) {
    dispatch({
      type: INCREMENT
    });
    toast.success("MY SUCCESS");
  };
}