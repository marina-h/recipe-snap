import React, { Component } from 'react'
import { Button, Image, View, Text, ScrollView, Linking, Share, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'

import styles from '../style'

/* -----------------    COMPONENT    ------------------ */

class Recipes extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Your Recipes`,
  })

  shareRecipe(name, url) {
    Share.share({
      title: name,
      message: `Here's a recipe I found with Recipe Snap: ${ name }`,
      url: url
    }, {
      dialogTitle: 'Sharing options: ',
      tintColor: 'green'
    })
    .catch(err => console.log(err))
  }

  render() {
    let { photoUrl, tags } = this.props.photo
    let { recipeList, preferences } = this.props.recipes

    const visitRecipeUrl = (url) => {
      Linking.openURL(url)
      .catch(err => console.error('Error: ', err))
    }

    return (
      <View>
        <ScrollView>

          {/* Maybe add a separate screen to select ingredients from tags list */}
          {/* Possibly make each recipe show more info (ingredients, calories) when tapped */}

          { photoUrl
          ? <Image source={{ uri: photoUrl }} style={ styles.image } />
          : null }

          <Text>Here are the ingredients I see: { tags.join(', ') }</Text>
          <Text>Here are your dietary preferences: { preferences.join(', ') }</Text>

          {/*{ Show something if there are no recipes :( }*/}
          {
            recipeList.length
            ? recipeList.map((recipe, idx) => (
              <View key={ idx } >
                <Image source={{ uri: recipe.image }} style={ styles.image } />
                <Text>{ recipe.label }</Text>
                <Text>Source: { recipe.source }</Text>
                <TouchableHighlight onPress={ () => this.shareRecipe(recipe.label, recipe.url) }>
                  <View>
                    <Text>Click to share this recipe</Text>
                  </View>
                </TouchableHighlight>
                <Button
                  title="Link to original website"
                  onPress={ () => visitRecipeUrl(recipe.url) }
                  />

                {/*{ Add a select option to keep recipe in store. At the bottom of the page, add a Export link that can send all recipe links at once }*/}

              </View>
              ))
            : <Text style={ styles.mainText }>Sorry, I couldn't find any recipies with those ingredients and options :(</Text>
          }

        </ScrollView>
      </View>
    )
  }
}

/* -----------------   REACT-REDUX   ------------------ */

const mapState = ({ photo, recipes }) => ({ photo, recipes })
const mapDispatch = dispatch => ({
})

/* -----------------    NAVIGATOR    ------------------ */

const RecipesScreen = connect(mapState, mapDispatch)(Recipes)

export default RecipesScreen
