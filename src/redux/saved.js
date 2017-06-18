/* -----------------    ACTIONS     ------------------ */

const ADD_RECIPE = 'ADD_RECIPE'

/* ------------   ACTION CREATORS     ------------------ */

const addRecipe = recipe => ({ type: ADD_RECIPE, recipe })

/* ------------       REDUCERS     ------------------ */

const initialCategoryState = {
  savedRecipes: [{}]
}

const reducer = (state = initialCategoryState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case ADD_RECIPE:
    newState.savedRecipes = [action.recipe, ...state.savedRecipes]
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
