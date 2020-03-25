/* ============
 * Actions for the COURSE module
 * ============
 *
 * The actions that are available on the
 * COURSE module.
 */

import {
  ADMIN_DASH_BOARD_LIST, 
  SPINNER_ADD,
} from "./action-types";

export function list(payload) {
  return {
    type: ADMIN_DASH_BOARD_LIST,
    payload
  }
}
 
export function spinerAdd(payload) {
  return {
    type: SPINNER_ADD,
    payload
  }
}

 