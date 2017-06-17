import axios from 'axios'

import { edamamId, edamamKey } from '../secrets'

/* -----------------    ACTIONS     ------------------ */

const SET_RECIPES = 'SET_RECIPES'
const SET_PREFERENCES = 'SET_PREFERENCES'

/* ------------   ACTION CREATORS     ------------------ */

const setRecipes = recipes => ({ type: SET_RECIPES, recipes })
const setPreferences = preferences => ({ type: SET_PREFERENCES, preferences })

/* ------------       REDUCERS     ------------------ */

const initialCategoryState = {
  recipeList: [{}],
  preferences: []
}

const reducer = (state = initialCategoryState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case SET_RECIPES:
    newState.recipeList = action.recipes
    break

  case SET_PREFERENCES:
    newState.preferences = action.preferences
    break

  default:
    return state
  }

  return newState
}

/* ------------       DISPATCHERS     ------------------ */

// https://api.edamam.com/search?q=pizza+cheese&app_id=092ad3fe&app_key=3cd9d2735f133ac251b9f78c1df1cf0b&from=0&to=3&health=vegetarian

export const resetRecipies = dispatch => {
  dispatch(setRecipes([{}]))
}

export const getRecipesList = (tags, preferences = []) => dispatch => {
  let queries = tags.map(tag => tag.split(' ')).join('+')
  console.log('Queries: ', queries, 'Tags', tags)
  let health = preferences.length ? `health=${preferences.join('&health=')}` : ''
  let edamamApiPath = `https://api.edamam.com/search?q=${queries}&app_id=${edamamId}&app_key=${edamamKey}&from0&to=3&${health}`

  console.log('edamamApiPath', edamamApiPath)

  dispatch(setPreferences(preferences))

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
