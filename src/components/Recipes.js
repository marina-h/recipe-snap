import React from 'react'
import { Button, Image, View, Text, ScrollView, Linking } from 'react-native'
import { connect } from 'react-redux'

import styles from '../style'
// import { setPhotoUrl, setPhotoBase64, setPhotoTags } from '../redux/photo'

/* -----------------    COMPONENT    ------------------ */

const Recipes = ({ photo, recipes }) => {
  let { photoUrl, tags } = photo
  let { recipeList } = recipes

  return (
    <View style={ styles.container }>
      <ScrollView>

        {/* Maybe add a way to select ingredients from tags list */}

        { photoUrl
        ? <Image source={{ uri: photoUrl }} style={ styles.image } />
        : null }

        <Text>Here are the ingredients I see: { tags.join(' ') }</Text>

        <Text>Recipes: { recipeList.map(entry => entry.label) }</Text>

        {/*{
          recipeList.map((recipe, idx) => (
            <View key={ recipe.uri.concat(idx) } >
              <Image source={{ uri: recipe.image }} style={ styles.image } />
              <Text>{ recipe.label }</Text>
            </View>
          ))
        }*/}
      </ScrollView>
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
