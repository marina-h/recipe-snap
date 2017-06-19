import React, { Component } from 'react'
import { Image, View, Text, ScrollView, Linking, Share, TouchableHighlight, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { Button, SwipeDeck, Card } from 'react-native-elements';

import styles from '../style'
import { saveNewRecipe } from '../redux/saved'

/* -----------------    COMPONENT    ------------------ */

class Recipes extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Your Recipes`,
  })

  render() {
    let { recipes, saved, saveRecipe } = this.props
    let { recipeList } = recipes

    const visitRecipeUrl = (url) => {
      Linking.openURL(url)
      .catch(err => console.error('Error: ', err))
    }

    const createLabel = (recipe) => {
      return `${recipe.label}${'\n'}Source: ${recipe.source}`
    }

    const renderCard = (card) => {
      return (
        <View key={ Math.random() + '' } style={ styles.photoPicker } >
          <Card
            containerStyle={ styles.card }
            image={{ uri: card.image }}
            featuredTitle={ createLabel(card) }
            featuredTitleStyle={ styles.cardTitle }
            imageStyle={ styles.cardImage }
            />
        </View>
      )
    }

    const onSwipeRight = (card) => {
      console.log("Card saved: " + card.label)
      saveRecipe(card)
    }

    const onSwipeLeft = (card) => {
      console.log("Card dismissed: " + card.label);
    }

    const renderNoMoreCards = () => {
      return (
        <View key={ Math.random() + '' } style={ [styles.photoPicker, { marginTop: 170 } ] } >
          <Card
            containerStyle={ styles.card }
            image={{ uri: 'https://media.giphy.com/media/lD76yTC5zxZPG/giphy.gif' }}
            imageStyle={ styles.cardImage }
          />
        </View>
      )
    }

    return (
      <Image
        source={ require('../images/salad-background_arrows.jpg' )}
        style={ styles.backgroundImage } >
        <View style={ styles.cardView } key={ Math.random() + '' }>
          { recipeList.length
            ? <SwipeDeck
              key={ recipeList }
              data={ recipeList }
              renderCard={ renderCard }
              renderNoMoreCards={ renderNoMoreCards }
              onSwipeRight={ onSwipeRight }
              onSwipeLeft={ onSwipeLeft }
              />
            : <Text style={ [styles.mainFont, styles.mainText] }>Sorry, I couldn't find any recipies with those ingredients and options :(</Text>
          }
        </View>
      </Image>
    )
  }
}

/* -----------------   REACT-REDUX   ------------------ */

const mapState = ({ recipes }) => ({ recipes })
const mapDispatch = dispatch => ({
  saveRecipe: (recipe) => {
    dispatch(saveNewRecipe(recipe))
  }
})

const RecipesScreen = connect(mapState, mapDispatch)(Recipes)

export default RecipesScreen
