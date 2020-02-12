import {
  TASK_ADD,
  TASK_UPDATE,
  TASK_REMOVE,
  TASK_LIST,
  COURSE_LIST
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
  total: 0
};

const reducer = (state = initialState, { type, payload = null }) => {
  switch (type) {
    case TASK_ADD:
      return add(state, payload);
    case TASK_UPDATE:
      return update(state, payload);
    case TASK_REMOVE:
      return remove(state, payload);
    case TASK_LIST:
      return list(state, payload);
    case COURSE_LIST:
      return courseList(state, payload);
    default:
      return state;
  }
}

function add(state, payload) {
  const task = state.data.find((task) => (task.id === payload.id))

  if (!task) {
    const data = [...state.data, payload]

    return Object.assign({}, state, { data })
  }

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

  return Object.assign({}, state, { data })
}

function list(state, payload) {
  state = Object.assign({}, payload)

  return state
}

function courseList(state, payload) {

  const dataList = payload.data;
  const data = [...state.data, payload]
  state = Object.assign({ data, dataList });
  return state;
}

export default reducer
