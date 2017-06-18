/* -----------------    ACTIONS     ------------------ */

const ADD_RECIPE = 'ADD_RECIPE'

/* ------------   ACTION CREATORS     ------------------ */

const addRecipe = recipe => ({ type: ADD_RECIPE, recipe })

/* ------------       REDUCERS     ------------------ */

const initialCategoryState = {
  savedRecipesList: []
}

const reducer = (state = initialCategoryState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case ADD_RECIPE:
    newState.savedRecipesList = [...state.savedRecipesList, action.recipe]
    break

  default:
    return state
  }

  return newState
}

/* ------------       DISPATCHERS     ------------------ */

export const saveNewRecipe = (recipe) => dispatch => {
  dispatch(addRecipe(recipe))
}

export default reducer
