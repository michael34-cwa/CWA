import {
  SCHOOL_LIST_ADD,
  SCHOOL_LIST_UPDATE,
  SCHOOL_LIST_REMOVE,
  SCHOOL_LIST_LIST,
  SPINNER_ADD, 
} from './action-types'


const initialState = {
  currentPage: 0,
  data: [],
  from: 0,
  lastPage: 0,
  nextPageUrl: '',
  path: '',
  perPage: 0,
  prevPageUrl: null,
  to: 0,
  total: 0,
  loading:true
}

const reducer = (state = initialState, { type, payload = null }) => {
  switch(type) {
    case SPINNER_ADD:
      return spinerAdd(state, payload)
    case SCHOOL_LIST_ADD:
      return add(state, payload)
    case SCHOOL_LIST_UPDATE:
      return update(state, payload)
    case SCHOOL_LIST_REMOVE:
      return remove(state, payload)
    case SCHOOL_LIST_LIST:
      return list(state, payload) 
    default:
      return state
  }
}

function add(state, payload) {  
  const schoolList = state.data.find((schoolList) => (schoolList.id === payload.id))
 

  if (!schoolList) {
    const data = [...state.data, payload]
 
    return Object.assign({}, state, { data })
  }
 
    state.loading = false;
 
  return update(state, payload)
}

function update(state, payload) {
 
  const data = state.data.map(obj => {
    if (obj.id === payload.id) { 
      return { ...obj, ...payload}
    } 
    return obj
  })
 // state.loading = false 
  return Object.assign({}, state, { data })
}

function remove(state, id) {
  const data = state.data.filter(obj => obj.id !== id)
  state.loading = false;
  return Object.assign({}, state, { data })
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
