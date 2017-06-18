import React, { Component } from 'react'
import { Button, Image, View, Text, ScrollView, Linking, Share, TouchableHighlight, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import SwipeCards from 'react-native-swipe-cards'
import { SwipeDeck, Card } from 'react-native-elements';

import styles from '../style'

/* -----------------    COMPONENT    ------------------ */

class Recipes extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Your Recipes`,
  })

  render() {
    const renderCard = (card) => {
      return (
        <View>
          <Card
            key={card.id}
            containerStyle={{borderRadius: 10, width: 200, height: 200}}
            featuredTitle={`${card.text}, ${card.age}`}
            featuredTitleStyle={{position: 'absolute', left: 15, bottom: 10, fontSize: 30 }}
            image={{ uri: card.uri }}
            imageStyle={{borderRadius: 10, width: 200, height: 200}}
          />
          <Text style={ styles.mainTextSmall } >Recipe Name Here</Text>
        </View>
      )
    }

    const onSwipeRight = (card) => {
      console.log("Card liked: " + card.text);
    }

    const onSwipeLeft = (card) => {
      console.log("Card disliked: " + card.text);
    }

    const renderNoMoreCards = () => {
      return (
        <Card
          containerStyle={{borderRadius: 10, width:200, height: 200}}
          featuredTitle="No more cards"
          featuredTitleStyle={{fontSize: 25}}
          image={{ uri: 'https://i.imgflip.com/1j2oed.jpg' }}
          imageStyle={{borderRadius: 10, width: 200, height: 200}}
        />
      )
    }

    return (
      <SwipeDeck
        data={DATA}
        renderCard={renderCard}
        renderNoMoreCards={renderNoMoreCards}
        onSwipeRight={onSwipeRight}
        onSwipeLeft={onSwipeLeft}
      />
    )
  }
}

// test data
const DATA = [
  { id: 1, text: 'Amanda', age: 28, uri: 'http://f9view.com/wp-content/uploads/2013/10/American-Beautiful-Girls-Wallpapers-Hollywood-Celebs-1920x1200px.jpg' },
  { id: 2, text: 'Emma', age: 29, uri: 'https://i.imgur.com/FHxVpN4.jpg' },
  { id: 3, text: 'Scarlett', age: 25, uri: 'https://i.ytimg.com/vi/GOJZ5TIlc3M/maxresdefault.jpg' }
]

/* -----------------   REACT-REDUX   ------------------ */

const mapState = ({ photo, recipes }) => ({ photo, recipes })
const mapDispatch = dispatch => ({
})

const RecipesScreen = connect(mapState, mapDispatch)(Recipes)

export default RecipesScreen



// const Card = ({ backgroundColor, text }) => (
//   <View style={[ styles.card, {backgroundColor}]}>
//     <Text>{text}</Text>
//   </View>
// )

// const NoMoreCards = () => (
//   <View>
//     <Text style={ styles.noMoreCardsText }>No more cards</Text>
//   </View>
// )

// const Cards = [
//   {text: 'Tomato', backgroundColor: 'red', id: 1},
//   {text: 'Aubergine', backgroundColor: 'purple', id: 2},
//   {text: 'Courgette', backgroundColor: 'green', id: 3}
// ]

// class Recipes extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       cards: Cards
//     }
//   }

//   handleYup (card) {
//     console.log(`Yup for ${card.text}`)
//   }

//   handleNope (card) {
//     console.log(`Nope for ${card.text}`)
//   }

//   handleMaybe (card) {
//     console.log(`Maybe for ${card.text}`)
//   }

//   render() {
//     // If you want a stack of cards instead of one-per-one view, activate stack mode
//     // stack={true}
//     return (
//       <SwipeCards
//         cards={this.state.cards}
//         stack={true}
//         cardKey={Math.random() + ''}

//         renderCard={(cardData) => <Card key={ cardData.id } backgroundColor={ cardData.backgroundColor } text={ cardData.text } />}
//         renderNoMoreCards={() => <NoMoreCards />}

//         handleYup={this.handleYup}
//         handleNope={this.handleNope}
//         handleMaybe={this.handleMaybe}
//         hasMaybeAction
//       />
//     )
//   }
// }
