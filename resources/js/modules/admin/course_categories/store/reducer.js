import {
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE,
  CATEGORY_LIST,
  SPINNER_ADD,
  SPINNER_REMOVE
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
    case CATEGORY_ADD:
      return add(state, payload)
    case CATEGORY_UPDATE:
      return update(state, payload)
    case CATEGORY_REMOVE:
      return remove(state, payload)
    case CATEGORY_LIST:
      return list(state, payload)
    case SPINNER_REMOVE:
      return spinerRemove(state, payload)
    default:
      return state
  }
}

function add(state, payload) {
  const CATEGORY = state.data.find((CATEGORY) => (CATEGORY.id === payload.id))

  if (!CATEGORY) {
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

  return Object.assign({}, state, { data })
}

function list(state, payload) { 
  payload.loading = false 
  state = Object.assign({}, payload)

  return state
}

function spinerAdd(state, payload) {   
  //   state.loading = true 
  // return Object.assign({}, ...state)
  return {
    ...state,
    loading: true
  };
}

function spinerRemove(state, payload) { 
  state.loading = false 
  const data = [...state.data, payload]

  return Object.assign({}, state, { data })

}

export default reducer
