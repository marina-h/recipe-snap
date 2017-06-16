import axios from 'axios'

import { edamamId, edamamKey } from '../secrets'

/* -----------------    ACTIONS     ------------------ */

const SET_RECIPES = 'SET_RECIPES'

/* ------------   ACTION CREATORS     ------------------ */

const setRecipes = recipes => ({ type: SET_RECIPES, recipes })

/* ------------       REDUCERS     ------------------ */

const initialCategoryState = {
  recipeList: [{}]
}

const reducer = (state = initialCategoryState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case SET_RECIPES:
    newState.recipeList = action.recipes
    break

  default:
    return state
  }

  return newState
}

/* ------------       DISPATCHERS     ------------------ */

// https://api.edamam.com/search?q=pizza+cheese&app_id=092ad3fe&app_key=3cd9d2735f133ac251b9f78c1df1cf0b&from=0&to=3&health=vegetarian

export const getRecipesList = (tags) => dispatch => {
  let queries = tags.join('+')
  let edamamApiPath = `https://api.edamam.com/search?q=${queries}&app_id=${edamamId}&app_key=${edamamKey}&from0&to=3`

  axios.get(edamamApiPath)
  .then(res => {
    let recipes = res.data.hits.map(hit => hit.recipe)
    dispatch(setRecipes(recipes))
  })
  .catch(err => {
    console.log('ERROR in getRecipesList: ', err)
  })
}

export default reducer
