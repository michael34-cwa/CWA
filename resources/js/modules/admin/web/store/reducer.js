import {
  ADMIN_DASH_BOARD_LIST, 
  SPINNER_ADD,

} from "./action-types";

const initialState = { 
  data: [], 
  loading: true
};

const reducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case SPINNER_ADD:
      return spinerAdd(state, payload)
   
    case ADMIN_DASH_BOARD_LIST:
      return list(state, payload);
    default:
      return state;
  }
}
 

function list(state, payload) {
  state = Object.assign({}, payload)

  return state
}

function spinerAdd(state, payload) { 
  return {
    ...state,
    loading: true
  };
}

 

export default reducer
