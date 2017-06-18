import React, { Component } from 'react'
import { Image, View, Text } from 'react-native'
import { Button, CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay';

import styles from '../style'
import { getRecipesList } from '../redux/recipes'

/* -----------------    COMPONENT    ------------------ */

class Options extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vegetarian: false,
      vegan: false,
      'sugar-conscious': false,
      'peanut-free': false,
      loading: false,
      chosenTags: ['chicken', 'rice'],
      chosenPrefs: ['peanut-free']
    }
    this.changeCheckboxState = this.changeCheckboxState.bind(this)
    this.startLoading = this.startLoading.bind(this)
    this.stopLoading = this.stopLoading.bind(this)
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

  render() {
      let { photo, getRecipes, navigation } = this.props
      let { chosenTags, chosenPrefs } = this.state
      let { photoUrl, tags } = photo
      let { navigate } = navigation

      const requestRecipies = () => {
        this.startLoading()
        getRecipes(chosenTags, chosenPrefs)
        console.log('requested')
        this.stopLoading()
        navigate('Recipes')
      }

      const getPreferences = () => {
        return Object.keys(this.state).filter(key => {
          return this.state[key] && key !== 'loading'
        })
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

                {/* Add "I'm feeling lucky" option to select */}

                {/*{ photoUrl
                  ? <Image source={{ uri: photoUrl }} style={ styles.image } />
                  : null }

                  <Text>Here are the ingredients I see: { tags.join(', ') }</Text>
                }*/}

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

  /* -----------------    NAVIGATOR    ------------------ */

  const OptionsScreen = connect(mapState, mapDispatch)(Options)

  export default OptionsScreen
