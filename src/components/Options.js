import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { Button, CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay';

import styles from '../style'
import { getRecipesList } from '../redux/recipes'

/* -----------------    COMPONENT    ------------------ */

class Options extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Choose Ingredients`,
  })

  constructor(props) {
    super(props)
    this.state = {
      vegetarian: false,
      vegan: false,
      'sugar-conscious': false,
      'peanut-free': false,
      loading: false,
      chosenTags: [],
      chosenPrefs: []
    }
    this.changeCheckboxState = this.changeCheckboxState.bind(this)
    this.startLoading = this.startLoading.bind(this)
    this.stopLoading = this.stopLoading.bind(this)
    this.addOrDeleteIngredient = this.addOrDeleteIngredient.bind(this)
  }

  changeCheckboxState(option) {
    this.setState({
      [option]: !this.state[option]
    })
  }

  startLoading() {
    this.setState({
      loading: true
    })
  }

  stopLoading() {
    this.setState({
      loading: false
    })
  }

  addOrDeleteIngredient(newIngredient) {
    let chosenList = this.state.chosenTags
    if (!chosenList.includes(newIngredient)) {
      this.setState({
        chosenTags: [...chosenList, newIngredient]
      })
    } else {
      this.setState({
        chosenTags: chosenList.filter(item => item !== newIngredient)
      })
    }
    console.log('current State', this.state )
  }

  render() {
      let { photo, getRecipes, navigation } = this.props
      let { chosenTags, chosenPrefs } = this.state
      let { photoUrl, tags } = photo
      let { navigate } = navigation
      let addOrDeleteIngredient = this.addOrDeleteIngredient

      const requestRecipies = () => {
        this.startLoading()
        getRecipes(chosenTags, chosenPrefs)
        this.stopLoading()
        navigate('Recipes')
      }

      const getPreferences = () => {
        return Object.keys(this.state).filter(key => {
          return this.state[key] && key !== 'loading'
        })
      }

      const createIngredientCheckbox = (ingredient) => {
        console.log('ingredient, ', ingredient)
        let chosenTagsList = this.state.chosenTags
        return (
          <CheckBox
              center
              title={ ingredient }
              checked={ chosenTagsList.includes(ingredient) }
              onPress={ () => this.addOrDeleteIngredient(ingredient) }
              containerStyle={ styles.checkbox }
            />
        )
      }

      const createCheckbox = (option) => {
        return (
          <CheckBox
              center
              title={ option }
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={ this.state[option] }
              onPress={ () => this.changeCheckboxState(option) }
              containerStyle={ styles.checkbox }
            />
        )
      }

      return (
        <View style={ styles.photoPicker } >
          { !this.state.loading
            ?
            <Image
              source={ require('../images/salad-background.jpg' )}
              style={ styles.backgroundImage } >
              <View style={ styles.photoPicker } >

                <Text style={ [styles.mainFont, styles.mainTextSmall] }>Choose your ingredients: </Text>
                {
                  tags.map((tag, idx) => (
                    <View key={ idx }>
                      { createIngredientCheckbox(tag) }
                    </View>
                  ))
                }

                <Text style={ [styles.mainFont, styles.mainTextSmall] }>Options: </Text>
                <View style={ styles.checkboxRow } >
                  { createCheckbox('vegetarian') }
                  { createCheckbox('vegan') }
                </View>
                <View style={ styles.checkboxRow } >
                  { createCheckbox('sugar-conscious') }
                  { createCheckbox('peanut-free') }
                </View>

                <Button
                  raised
                  large
                  title="Find recipies!"
                  backgroundColor="#009688"
                  icon={{ name: 'search' }}
                  onPress={ requestRecipies } />
              </View>
            </Image>
          :
          <View style={{ flex: 1 }}>
            <Spinner
              visible={this.state.loading}
              textContent={ 'Searching for tasty recipes...' }
              textStyle={{ color: '#000' }}
              color="#000"
              overlayColor="#F0EFF5" />
          </View>
        }
        </View>
      )
    }
  }

  /* -----------------   REACT-REDUX   ------------------ */

const mapState = ({ photo }) => ({ photo })
const mapDispatch = dispatch => ({
  getRecipes: (tags, prefs) => {
    dispatch(getRecipesList(tags, prefs))
  }
})

const OptionsScreen = connect(mapState, mapDispatch)(Options)

export default OptionsScreen
