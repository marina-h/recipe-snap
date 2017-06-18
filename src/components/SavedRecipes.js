import React, { Component } from 'react'
import { Button, Image, View, Text, ScrollView, Linking, Share, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'
import Swipeout from 'react-native-swipeout'
import IconBadge from 'react-native-icon-badge'

import styles from '../style'

/* -----------------    COMPONENT    ------------------ */

class SavedRecipes extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Saved Recipes`,
    tabBarLabel: `Saved Recipes`,
    tabBarIcon: <Icon name="list" />
    // () => {
    //   return (
    //     <IconBadge
    //       MainElement={
    //         <Icon name="list" />
    //       }
    //       BadgeElement={
    //         <Text style={ styles.badge }>{ Object.keys(this.props.saved.SavedRecipes).length }</Text>
    //       }
    //       IconBadgeStyle={{
    //         width: 12,
    //         height: 12,
    //       }}
    //     />
    //   )
    // }
  })

  shareRecipe(name, url) {
    Share.share({
      title: name,
      message: `Here's a recipe I found with Recipe Snap: ${ name }`,
      url: url
    }, {
      dialogTitle: 'Sharing options: ',
      // tintColor: 'green'
    })
    .catch(err => console.log(err))
  }

  render() {
    let { photoUrl, tags } = this.props.photo
    let { recipeList } = this.props.recipes

    const visitRecipeUrl = (url) => {
      Linking.openURL(url)
      .catch(err => console.error('Error: ', err))
    }

    const swipeoutBtns = [
      {
        text: 'Button',
        onPress: () => {
          console.log('Pressed')
        },
        sensitivity: 20
      }
    ]

    return (
      <View>
        <ScrollView>

          {/* Maybe add a separate screen to select ingredients from tags list */}
          {/* Possibly make each recipe show more info (ingredients, calories) when tapped */}

          {
            recipeList.length
            ? recipeList.map((recipe, idx) => (
              <Swipeout key={ idx }
                right={ swipeoutBtns }
                autoClose={ true }>
                <View>
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
              </Swipeout>
              ))
            : <Text style={ styles.mainText }>No saved recipes!</Text>
          }

        </ScrollView>
      </View>
    )
  }
}

/* -----------------   REACT-REDUX   ------------------ */

const mapState = ({ photo, recipes, saved }) => ({ photo, recipes, saved })
const mapDispatch = dispatch => ({
})

const SavedRecipesScreen = connect(mapState, mapDispatch)(SavedRecipes)

export default SavedRecipesScreen
