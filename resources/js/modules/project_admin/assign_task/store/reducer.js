import {
ASSIGN_COURSE_ADD,
ASSIGN_COURSE_UPDATE,
ASSIGN_COURSE_REMOVE,
ASSIGN_COURSE_LIST,
  SPINNER_ADD,
  SPINNER_REMOVE,
  COURSE_SCHOOL_LIST
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
    case ASSIGN_COURSE_ADD:
      return add(state, payload)
    case ASSIGN_COURSE_UPDATE:
      return update(state, payload)
    case ASSIGN_COURSE_REMOVE:
      return remove(state, payload)
    case ASSIGN_COURSE_LIST:
      return list(state, payload)
    // case COURSE_SCHOOL_LIST:
    //   return courseSchoolList(state, payload)
    case SPINNER_REMOVE:
      return spinerRemove(state, payload)
    default:
      return state
  }
}

function add(state, payload) { 
  const ASSIGN_COURSE = state.data.find((ASSIGN_COURSE) => (ASSIGN_COURSE.id === payload.id))

  if (!ASSIGN_COURSE) {
    const data = [...state.data, payload]
 
    return Object.assign({}, state, { data })
  }

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
  // state.loading = false;
 
  return Object.assign({}, state, { data })
}

function list(state, payload) {  
  state = Object.assign({}, payload)

  return state
}

function courseSchoolList(state, payload) {
  const dataList = payload.data; 
  const data = [...state]
  state = Object.assign({ data, dataList });
  return state;
}


function spinerAdd(state, payload) {
  return {
    ...state,
    loading: true
  };
}

export default reducer
