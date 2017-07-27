/* -----------------    ACTIONS     ------------------ */

const ADD_RECIPE = 'ADD_RECIPE'
const DELETE_RECIPE = 'DELETE_RECIPE'

/* ------------   ACTION CREATORS     ------------------ */

const addRecipe = recipe => ({ type: ADD_RECIPE, recipe })
const deleteRecipe = url => ({ type: DELETE_RECIPE, url })

/* ------------       REDUCERS     ------------------ */

const exampleSavedRecipe = {
  "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_119e834de07ea28cf4f6c287b2ed41d5",
  "label": "Potato And Cauliflower Curry",
  "image": "https://www.edamam.com/web-img/935/935af4a7ab8d9423c53c8ac80d9742b6.jpg",
  "source": "The Kitchn",
  "url": "http://www.thekitchn.com/weeknight-recipe-potato-and-ca-108287",
  "shareAs": "http://www.edamam.com/recipe/potato-and-cauliflower-curry-119e834de07ea28cf4f6c287b2ed41d5/curry+cauliflower/vegetarian",
  "yield": 4,
  "dietLabels": [
    "Low-Fat"
  ],
  "healthLabels": [
    "Vegetarian",
    "Peanut-Free",
    "Tree-Nut-Free",
    "Alcohol-Free"
  ],
  "cautions": [],
  "ingredientLines": [
    "1 large or 2 small onions, diced small",
    "1 lb (about 6 small) red potatoes, cut into small cubes",
    "1 small head of cauliflower, cut into bite-sized pieces",
    "1-inch nub of garlic, minced or grated on a microplane",
    "1 tsp cumin",
    "2 tsps curry powder",
    "1/4 tsp turmeric",
    "1 (28-oz) can diced tomatoes in their juices",
    "1/4 cup yogurt"
  ],
  "ingredients": [
    {
      "text": "1 large or 2 small onions, diced small",
      "weight": 52.5
    },
    {
      "text": "1 lb (about 6 small) red potatoes, cut into small cubes",
      "weight": 453.5923767089844
    },
    {
      "text": "1 small head of cauliflower, cut into bite-sized pieces",
      "weight": 265
    },
    {
      "text": "1-inch nub of garlic, minced or grated on a microplane",
      "weight": 24
    },
    {
      "text": "1 tsp cumin",
      "weight": 2.0999999046325684
    },
    {
      "text": "2 tsps curry powder",
      "weight": 4
    },
    {
      "text": "1/4 tsp turmeric",
      "weight": 0.75
    },
    {
      "text": "1 (28-oz) can diced tomatoes in their juices",
      "weight": 793.78662109375
    },
    {
      "text": "1/4 cup yogurt",
      "weight": 61.25
    }
  ],
  "calories": 628.1080227136611,
  "totalWeight": 1656.978997707367,
  "totalNutrients": {
    "ENERC_KCAL": {
      "label": "Energy",
      "quantity": 628.1080227136611,
      "unit": "kcal"
    },
    "FAT": {
      "label": "Fat",
      "quantity": 6.577065858888625,
      "unit": "g"
    },
    "FASAT": {
      "label": "Saturated",
      "quantity": 2.2122947815561296,
      "unit": "g"
    },
    "FATRN": {
      "label": "Trans",
      "quantity": 0.00042,
      "unit": "g"
    },
    "FAMS": {
      "label": "Monounsaturated",
      "quantity": 1.6271374063491821,
      "unit": "g"
    },
    "FAPU": {
      "label": "Polyunsaturated",
      "quantity": 1.4732979864358902,
      "unit": "g"
    },
    "CHOCDF": {
      "label": "Carbs",
      "quantity": 132.1940236064911,
      "unit": "g"
    },
    "FIBTG": {
      "label": "Fiber",
      "quantity": 32.0082661948204,
      "unit": "g"
    },
    "SUGAR": {
      "label": "Sugars",
      "quantity": 36.65637549529075,
      "unit": "g"
    },
    "PROCNT": {
      "label": "Protein",
      "quantity": 25.179295209455493,
      "unit": "g"
    },
    "CHOLE": {
      "label": "Cholesterol",
      "quantity": 7.9625,
      "unit": "mg"
    },
    "NA": {
      "label": "Sodium",
      "quantity": 280.6907897567749,
      "unit": "mg"
    },
    "CA": {
      "label": "Calcium",
      "quantity": 537.0473217439651,
      "unit": "mg"
    },
    "MG": {
      "label": "Magnesium",
      "quantity": 256.9649846363068,
      "unit": "mg"
    },
    "K": {
      "label": "Potassium",
      "quantity": 4740.103258609772,
      "unit": "mg"
    },
    "FE": {
      "label": "Iron",
      "quantity": 12.067743026924134,
      "unit": "mg"
    },
    "ZN": {
      "label": "Zinc",
      "quantity": 4.216473783874512,
      "unit": "mg"
    },
    "P": {
      "label": "Phosphorus",
      "quantity": 665.7690749025345,
      "unit": "mg"
    },
    "VITA_RAE": {
      "label": "Vitamin A",
      "quantity": 192.55455657958984,
      "unit": "µg"
    },
    "VITC": {
      "label": "Vitamin C",
      "quantity": 278.6302586474418,
      "unit": "mg"
    },
    "THIA": {
      "label": "Thiamin (B1)",
      "quantity": 5.174758395824432,
      "unit": "mg"
    },
    "RIBF": {
      "label": "Riboflavin (B2)",
      "quantity": 0.8797382780694962,
      "unit": "mg"
    },
    "NIA": {
      "label": "Niacin (B3)",
      "quantity": 12.718608646206857,
      "unit": "mg"
    },
    "VITB6A": {
      "label": "Vitamin B6",
      "quantity": 2.532947689404488,
      "unit": "mg"
    },
    "FOLDFE": {
      "label": "Folate (Equivalent)",
      "quantity": 313.7820574855804,
      "unit": "µg"
    },
    "VITB12": {
      "label": "Vitamin B12",
      "quantity": 0.22662500000000002,
      "unit": "µg"
    },
    "VITD": {
      "label": "Vitamin D",
      "quantity": 0.061250000000000006,
      "unit": "µg"
    },
    "TOCPHA": {
      "label": "Vitamin E",
      "quantity": 6.119905298948288,
      "unit": "mg"
    },
    "VITK1": {
      "label": "Vitamin K",
      "quantity": 82.19539093112945,
      "unit": "µg"
    }
  },
  "totalDaily": {
    "ENERC_KCAL": {
      "label": "Energy",
      "quantity": 31.405401135683054,
      "unit": "%"
    },
    "FAT": {
      "label": "Fat",
      "quantity": 10.118562859828653,
      "unit": "%"
    },
    "FASAT": {
      "label": "Saturated",
      "quantity": 11.061473907780648,
      "unit": "%"
    },
    "CHOCDF": {
      "label": "Carbs",
      "quantity": 44.06467453549703,
      "unit": "%"
    },
    "FIBTG": {
      "label": "Fiber",
      "quantity": 128.0330647792816,
      "unit": "%"
    },
    "PROCNT": {
      "label": "Protein",
      "quantity": 50.35859041891099,
      "unit": "%"
    },
    "CHOLE": {
      "label": "Cholesterol",
      "quantity": 2.654166666666667,
      "unit": "%"
    },
    "NA": {
      "label": "Sodium",
      "quantity": 11.695449573198955,
      "unit": "%"
    },
    "CA": {
      "label": "Calcium",
      "quantity": 53.704732174396504,
      "unit": "%"
    },
    "MG": {
      "label": "Magnesium",
      "quantity": 64.2412461590767,
      "unit": "%"
    },
    "K": {
      "label": "Potassium",
      "quantity": 135.43152167456492,
      "unit": "%"
    },
    "FE": {
      "label": "Iron",
      "quantity": 67.04301681624518,
      "unit": "%"
    },
    "ZN": {
      "label": "Zinc",
      "quantity": 28.10982522583008,
      "unit": "%"
    },
    "P": {
      "label": "Phosphorus",
      "quantity": 95.1098678432192,
      "unit": "%"
    },
    "VITA_RAE": {
      "label": "Vitamin A",
      "quantity": 21.39495073106554,
      "unit": "%"
    },
    "VITC": {
      "label": "Vitamin C",
      "quantity": 464.383764412403,
      "unit": "%"
    },
    "THIA": {
      "label": "Thiamin (B1)",
      "quantity": 344.98389305496215,
      "unit": "%"
    },
    "RIBF": {
      "label": "Riboflavin (B2)",
      "quantity": 51.74931047467626,
      "unit": "%"
    },
    "NIA": {
      "label": "Niacin (B3)",
      "quantity": 63.59304323103428,
      "unit": "%"
    },
    "VITB6A": {
      "label": "Vitamin B6",
      "quantity": 126.6473844702244,
      "unit": "%"
    },
    "FOLDFE": {
      "label": "Folate (Equivalent)",
      "quantity": 78.4455143713951,
      "unit": "%"
    },
    "VITB12": {
      "label": "Vitamin B12",
      "quantity": 3.7770833333333336,
      "unit": "%"
    },
    "VITD": {
      "label": "Vitamin D",
      "quantity": 0.015312500000000001,
      "unit": "%"
    },
    "TOCPHA": {
      "label": "Vitamin E",
      "quantity": 30.59952649474144,
      "unit": "%"
    },
    "VITK1": {
      "label": "Vitamin K",
      "quantity": 102.74423866391183,
      "unit": "%"
    }
  },
  "digest": [
    {
      "label": "Fat",
      "tag": "FAT",
      "schemaOrgTag": "fatContent",
      "total": 6.577065858888625,
      "hasRDI": true,
      "daily": 10.118562859828653,
      "unit": "g",
      "sub": [
        {
          "label": "Saturated",
          "tag": "FASAT",
          "schemaOrgTag": "saturatedFatContent",
          "total": 2.2122947815561296,
          "hasRDI": true,
          "daily": 11.061473907780648,
          "unit": "g"
        },
        {
          "label": "Trans",
          "tag": "FATRN",
          "schemaOrgTag": "transFatContent",
          "total": 0.00042,
          "hasRDI": false,
          "daily": 0,
          "unit": "g"
        },
        {
          "label": "Monounsaturated",
          "tag": "FAMS",
          "schemaOrgTag": null,
          "total": 1.6271374063491821,
          "hasRDI": false,
          "daily": 0,
          "unit": "g"
        },
        {
          "label": "Polyunsaturated",
          "tag": "FAPU",
          "schemaOrgTag": null,
          "total": 1.4732979864358902,
          "hasRDI": false,
          "daily": 0,
          "unit": "g"
        }
      ]
    },
    {
      "label": "Carbs",
      "tag": "CHOCDF",
      "schemaOrgTag": "carbohydrateContent",
      "total": 132.1940236064911,
      "hasRDI": true,
      "daily": 44.06467453549703,
      "unit": "g",
      "sub": [
        {
          "label": "Carbs (net)",
          "tag": "CHOCDF.net",
          "schemaOrgTag": null,
          "total": 100.18575741167069,
          "hasRDI": false,
          "daily": 0,
          "unit": "g"
        },
        {
          "label": "Fiber",
          "tag": "FIBTG",
          "schemaOrgTag": "fiberContent",
          "total": 32.0082661948204,
          "hasRDI": true,
          "daily": 128.0330647792816,
          "unit": "g"
        },
        {
          "label": "Sugars",
          "tag": "SUGAR",
          "schemaOrgTag": "sugarContent",
          "total": 36.65637549529075,
          "hasRDI": false,
          "daily": 0,
          "unit": "g"
        }
      ]
    },
    {
      "label": "Protein",
      "tag": "PROCNT",
      "schemaOrgTag": "proteinContent",
      "total": 25.179295209455493,
      "hasRDI": true,
      "daily": 50.35859041891099,
      "unit": "g"
    },
    {
      "label": "Cholesterol",
      "tag": "CHOLE",
      "schemaOrgTag": "cholesterolContent",
      "total": 7.9625,
      "hasRDI": true,
      "daily": 2.654166666666667,
      "unit": "mg"
    },
    {
      "label": "Sodium",
      "tag": "NA",
      "schemaOrgTag": "sodiumContent",
      "total": 280.6907897567749,
      "hasRDI": true,
      "daily": 11.695449573198955,
      "unit": "mg"
    },
    {
      "label": "Calcium",
      "tag": "CA",
      "schemaOrgTag": null,
      "total": 537.0473217439651,
      "hasRDI": true,
      "daily": 53.704732174396504,
      "unit": "mg"
    },
    {
      "label": "Magnesium",
      "tag": "MG",
      "schemaOrgTag": null,
      "total": 256.9649846363068,
      "hasRDI": true,
      "daily": 64.2412461590767,
      "unit": "mg"
    },
    {
      "label": "Potassium",
      "tag": "K",
      "schemaOrgTag": null,
      "total": 4740.103258609772,
      "hasRDI": true,
      "daily": 135.43152167456492,
      "unit": "mg"
    },
    {
      "label": "Iron",
      "tag": "FE",
      "schemaOrgTag": null,
      "total": 12.067743026924134,
      "hasRDI": true,
      "daily": 67.04301681624518,
      "unit": "mg"
    },
    {
      "label": "Zinc",
      "tag": "ZN",
      "schemaOrgTag": null,
      "total": 4.216473783874512,
      "hasRDI": true,
      "daily": 28.10982522583008,
      "unit": "mg"
    },
    {
      "label": "Phosphorus",
      "tag": "P",
      "schemaOrgTag": null,
      "total": 665.7690749025345,
      "hasRDI": true,
      "daily": 95.1098678432192,
      "unit": "mg"
    },
    {
      "label": "Vitamin A",
      "tag": "VITA_RAE",
      "schemaOrgTag": null,
      "total": 192.55455657958984,
      "hasRDI": true,
      "daily": 21.39495073106554,
      "unit": "µg"
    },
    {
      "label": "Vitamin C",
      "tag": "VITC",
      "schemaOrgTag": null,
      "total": 278.6302586474418,
      "hasRDI": true,
      "daily": 464.383764412403,
      "unit": "mg"
    },
    {
      "label": "Thiamin (B1)",
      "tag": "THIA",
      "schemaOrgTag": null,
      "total": 5.174758395824432,
      "hasRDI": true,
      "daily": 344.98389305496215,
      "unit": "mg"
    },
    {
      "label": "Riboflavin (B2)",
      "tag": "RIBF",
      "schemaOrgTag": null,
      "total": 0.8797382780694962,
      "hasRDI": true,
      "daily": 51.74931047467626,
      "unit": "mg"
    },
    {
      "label": "Niacin (B3)",
      "tag": "NIA",
      "schemaOrgTag": null,
      "total": 12.718608646206857,
      "hasRDI": true,
      "daily": 63.59304323103428,
      "unit": "mg"
    },
    {
      "label": "Vitamin B6",
      "tag": "VITB6A",
      "schemaOrgTag": null,
      "total": 2.532947689404488,
      "hasRDI": true,
      "daily": 126.6473844702244,
      "unit": "mg"
    },
    {
      "label": "Folate (Equivalent)",
      "tag": "FOLDFE",
      "schemaOrgTag": null,
      "total": 313.7820574855804,
      "hasRDI": true,
      "daily": 78.4455143713951,
      "unit": "µg"
    },
    {
      "label": "Vitamin B12",
      "tag": "VITB12",
      "schemaOrgTag": null,
      "total": 0.22662500000000002,
      "hasRDI": true,
      "daily": 3.7770833333333336,
      "unit": "µg"
    },
    {
      "label": "Vitamin D",
      "tag": "VITD",
      "schemaOrgTag": null,
      "total": 0.061250000000000006,
      "hasRDI": true,
      "daily": 0.015312500000000001,
      "unit": "µg"
    },
    {
      "label": "Vitamin E",
      "tag": "TOCPHA",
      "schemaOrgTag": null,
      "total": 6.119905298948288,
      "hasRDI": true,
      "daily": 30.59952649474144,
      "unit": "mg"
    },
    {
      "label": "Vitamin K",
      "tag": "VITK1",
      "schemaOrgTag": null,
      "total": 82.19539093112945,
      "hasRDI": true,
      "daily": 102.74423866391183,
      "unit": "µg"
    }
  ]
}

const initialCategoryState = {
  savedRecipesList: [exampleSavedRecipe]
}

const reducer = (state = initialCategoryState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case ADD_RECIPE:
    newState.savedRecipesList = [...state.savedRecipesList, action.recipe]
    break

  case DELETE_RECIPE:
    newState.savedRecipesList = state.savedRecipesList.filter(recipe => recipe.url !== action.url)
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

export const deleteFromSaved = (url) => dispatch => {
  dispatch(deleteRecipe(url))
}

export default reducer
