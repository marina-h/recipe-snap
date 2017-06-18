import React, { Component } from 'react'
import { Button, Image, View, Text, ScrollView, Linking, Share, TouchableHighlight, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import Swipeout from 'react-native-swipeout'
import SwipeCards from 'react-native-swipe-cards'

import styles from '../style'

/* -----------------    COMPONENT    ------------------ */

// class Recipes extends Component {
//   static navigationOptions = ({ navigation }) => ({
//     title: `Your Recipes`,
//   })

//   render() {
//     return (
//       <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
//         <Text>{this.props.text}</Text>
//       </View>
//     )
//   }

// }

let Card = React.createClass({
  render() {
    return (
      <View style={[stylesTest.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
})

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={stylesTest.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

const Cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]

const test = React.createClass({
  getInitialState() {
    return {
      cards: Cards
    }
  },
  handleYup (card) {
    console.log(`Yup for ${card.text}`)
  },
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  },
  handleMaybe (card) {
    console.log(`Maybe for ${card.text}`)
  },
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <SwipeCards
        cards={this.state.cards}
        stack={true}

        renderCard={(cardData) => <Card {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    )
  }
})

const stylesTest = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})

/* -----------------   REACT-REDUX   ------------------ */

const mapState = ({ photo, recipes }) => ({ photo, recipes })
const mapDispatch = dispatch => ({
})

const RecipesScreen = connect(mapState, mapDispatch)(test)

export default RecipesScreen
