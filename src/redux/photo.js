/* -----------------    ACTIONS     ------------------ */

const SET_URL = 'SET_URL'
const SET_BASE64 = 'SET_BASE64'
const SET_TAGS = 'SET_TAGS'
// const UPDATE = 'UPDATE_QUANTITY'

/* ------------   ACTION CREATORS     ------------------ */

const setUrl = url => ({ type: SET_URL, url })
const setBase64 = base64 => ({ type: SET_BASE64, base64 })
const setTags = tags => ({ type: SET_URL, tags })

/* ------------       REDUCERS     ------------------ */

const initialCategoryState = {
  photoUrl: '',
  photoBase64: '',
  tags: []
}

const reducer = (state = initialCategoryState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case SET_URL:
    newState.photoUrl = action.url
    break

  case SET_TAGS:
    newState.tags = action.tags
    break

  case SET_BASE64:
    newState.photoBase64 = action.base64
    break

  default:
    return state
  }

  return newState
}

/* ------------       DISPATCHERS     ------------------ */

export const setPhotoUrl = (url) => dispatch => {
  dispatch(setUrl(url))
}

export const setPhotoBase64 = (base64) => dispatch => {
  dispatch(setBase64(base64))
}

export const setPhotoTags = (tags) => dispatch => {
  dispatch(setTags(tags))
}

export default reducer
