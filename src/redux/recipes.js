import axios from 'axios'

import { edamamId, edamamKey } from '../secrets'

/* -----------------    ACTIONS     ------------------ */

const SET_RECIPES = 'SET_RECIPES'
const SET_CHOSEN_TAGS = 'SET_CHOSEN_PREFERENCES'
const SET_CHOSEN_PREFERENCES = 'SET_CHOSEN_PREFERENCES'

/* ------------   ACTION CREATORS     ------------------ */

const setRecipes = recipes => ({ type: SET_RECIPES, recipes })
const setChosenTags = tags => ({ type: SET_CHOSEN_TAGS, tags })
const setChosenPreferences = preferences => ({ type: SET_CHOSEN_PREFERENCES, preferences })

/* ------------       REDUCERS     ------------------ */

const initialCategoryState = {
  recipeList: [{ image: '', label: '', source: '' }],
  chosenTags: [],
  chosenPreferences: []
}

const reducer = (state = initialCategoryState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case SET_RECIPES:
    newState.recipeList = action.recipes
    break

  case SET_CHOSEN_TAGS:
    newState.chosenTags = action.tags
    break

  case SET_CHOSEN_PREFERENCES:
    newState.chosenPreferences = action.preferences
    break

  default:
    return state
  }

  return newState
}

/* ------------       DISPATCHERS     ------------------ */

// Example:
// https://api.edamam.com/search?q=pizza+cheese&app_id=092ad3fe&app_key=3cd9d2735f133ac251b9f78c1df1cf0b&from=0&to=3&health=vegetarian

export const resetRecipies = dispatch => {
  dispatch(setRecipes([{}]))
}

export const getRecipesList = (tags, preferences = []) => dispatch => {
  let queries = tags.map(tag => tag.split(' ')).join('+')
  let health = preferences.length ? `health=${preferences.join('&health=')}` : ''
  let edamamApiPath = `https://api.edamam.com/search?q=${queries}&app_id=${edamamId}&app_key=${edamamKey}&from0&to=5&${health}`

  dispatch(setChosenTags(tags))
  dispatch(setChosenPreferences(preferences))

  axios.get(edamamApiPath)
  .then(res => {
    let recipes = res.data.hits.map((hit, idx) => {
      hit.recipe.id = `${idx}_${hit.recipe.uri}`
      return hit.recipe
    })
    dispatch(setRecipes(recipes))
  })
  .catch(err => {
    console.error('ERROR in getRecipesList: ', err)
  })
}

export default reducer
