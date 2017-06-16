import React from 'react'
import { Button, Image, View, Text } from 'react-native'
import { connect } from 'react-redux'

import styles from '../style'
// import { setPhotoUrl, setPhotoBase64, setPhotoTags } from '../redux/photo'

/* -----------------    COMPONENT    ------------------ */

const Recipes = ({ photo, recipes }) => {
  let { photoUrl, tags } = photo
  let { recipeList } = recipes

  return (
    <View style={ styles.container }>

      {/* Maybe add a way to select ingredients from tags list */}

      { photoUrl
      ? <Image source={{ uri: photoUrl }} style={ styles.image } />
      : null }

      <Text>Here are the ingredients I see: { tags.join(' ') }</Text>

      <Text>Recipes: { recipeList.map(entry => entry.label) }</Text>

    </View>
  )
}

/* -----------------   REACT-REDUX   ------------------ */

const mapState = ({ photo, recipes }) => ({ photo, recipes })
const mapDispatch = dispatch => ({
})

/* -----------------    NAVIGATOR    ------------------ */

const RecipesScreen = connect(mapState, mapDispatch)(Recipes)

export default RecipesScreen
