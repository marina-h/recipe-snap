/* -----------------    ACTIONS     ------------------ */

// const GET_RECIPIES = 'GET_RECIPIES'
const SET_RECIPIES = 'SET_RECIPIES'

/* ------------   ACTION CREATORS     ------------------ */

// const getRecipies = tags => ({ type: GET_RECIPIES, recipies })
const setRecipies = recipies => ({ type: SET_RECIPIES, recipies })

/* ------------       REDUCERS     ------------------ */

const initialCategoryState = {
  recipies: []
}

const reducer = (state = initialCategoryState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case SET_RECIPIES:
    newState.recipies = action.recipies
    break

  default:
    return state
  }

  return newState
}

/* ------------       DISPATCHERS     ------------------ */

export const setRecipieList = (tags) => dispatch => {
  // axios here
  // dispatch(setRecipies(recipies))
}

export default reducer
