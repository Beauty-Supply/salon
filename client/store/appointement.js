import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_APPOINTMNT = 'GET_APPOINTMNT'
const ADD_AP = 'ADD_APP'

/**
 * INITIAL STATE
 */
const defaultS = {
  apointmnts: [],
  singleApp: {}
}

/**
 * ACTION CREATORS
 */
const getApps = apps => ({
  type: GET_APPOINTMNT,
  apps
})

const addApp = apt => ({
  type: ADD_AP,
  apt
})

/**
 * THUNK CREATORS
 */
export const thunkAll = () => async dispatch => {
  try {
    const aps = (await axios.get('/api/appointements')).data
    dispatch(getApps(aps))
  } catch (err) {
    console.log(err)
  }
}

export const thunkPost = pst => async dispatch => {
  try {
    const newAp = (await axios.post('/api/appointements', pst)).data
    dispatch(addApp(newAp))
  } catch (err) {
    console.log(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultS, action) {
  switch (action.type) {
    case GET_APPOINTMNT:
      return {...state, apointmnts: action.apps}
    case ADD_AP:
      return {...state, apointmnts: [...state.apointmnts, action.apt]}
    default:
      return state
  }
}
