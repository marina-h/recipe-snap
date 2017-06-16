import React from 'react'
import { Button, Image, View, Text, ScrollView, Linking } from 'react-native'
import { connect } from 'react-redux'

import styles from '../style'
// import { setPhotoUrl, setPhotoBase64, setPhotoTags } from '../redux/photo'

/* -----------------    COMPONENT    ------------------ */

const Recipes = ({ photo, recipes }) => {
  let { photoUrl, tags } = photo
  let { recipeList } = recipes

  const visitRecipeUrl = (url) => {
    Linking.openURL(url)
    .catch(err => console.error('Error: ', err))
  }

  return (
    <View>
      <ScrollView>

        {/* Maybe add a way to select ingredients from tags list */}

        { photoUrl
        ? <Image source={{ uri: photoUrl }} style={ styles.image } />
        : null }

        <Text>Here are the ingredients I see: { tags.join(' ') }</Text>

        {
          recipeList.map((recipe, idx) => (
            <View key={ idx } >
              <Image source={{ uri: recipe.image }} style={ styles.image } />
              <Text>{ recipe.label }</Text>
              <Button
                title="Link to original website"
                onPress={ () => visitRecipeUrl(recipe.url) } />
            </View>
          ))
        }

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
