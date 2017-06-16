import React from 'react'
// import { ImagePicker } from 'expo'
import { Button, Image, View, Text, ImageEditor, ImageStore } from 'react-native'
import { connect } from 'react-redux'
import {
  StackNavigator,
} from 'react-navigation'


import styles from '../style'
// import { setPhotoUrl, setPhotoBase64, setPhotoTags } from '../redux/photo'
// import RecipiesScreen from './Recipies'

/* -----------------    COMPONENT    ------------------ */

const Recipies = () => {
  return (
    <View style={ styles.container }>
      <Text>Recipies will be here</Text>
    </View>
  )
}

/* -----------------   REACT-REDUX   ------------------ */

const mapState = () => {}
const mapDispatch = dispatch => ({
})

/* -----------------    NAVIGATOR    ------------------ */

const RecipiesScreen = connect()(Recipies)

export default RecipiesScreen
