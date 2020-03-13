import {
  COURSE_ADD,
  COURSE_UPDATE,
  COURSE_REMOVE,
  COURSE_LIST,
  CATEGORY_LIST,
  SPINNER_ADD,

} from "./action-types";

const initialState = {
  currentPage: 0,
  data: [],
  dataList: [],
  from: 0,
  lastPage: 0,
  nextPageUrl: "",
  path: "",
  perPage: 0,
  prevPageUrl: null,
  to: 0,
  total: 0,
  loading: true
};

const reducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case SPINNER_ADD:
      return spinerAdd(state, payload)
    case COURSE_ADD:
      return add(state, payload);
    case COURSE_UPDATE:
      return update(state, payload);
    case COURSE_REMOVE:
      return remove(state, payload);
    case COURSE_LIST:
      return list(state, payload);
    case CATEGORY_LIST:
      return catList(state, payload);
    default:
      return state;
  }
}

function add(state, payload) {
  const course = state.data.find((course) => (course.id === payload.id))

  if (!course) {
    const data = [...state.data, payload]

    return Object.assign({}, state, { data })
  }
  state.loading = false;
  return update(state, payload)
}

function update(state, payload) {
  const data = state.data.map(obj => {
    if (obj.id === payload.id) {
      return { ...obj, ...payload }
    }
    return obj
  })

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

function catList(state, payload) { 
   const dataList = payload.data;  
  const data = [...state.data, payload]
  state = Object.assign({ data,dataList }); 
  return state;
}

export default reducer
