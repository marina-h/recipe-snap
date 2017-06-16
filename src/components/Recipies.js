import React from 'react'
import { Button, Image, View, Text } from 'react-native'
import { connect } from 'react-redux'

import styles from '../style'
// import { setPhotoUrl, setPhotoBase64, setPhotoTags } from '../redux/photo'

/* -----------------    COMPONENT    ------------------ */

const Recipies = ({ photo }) => {
  let { photoUrl, tags } = photo

  return (
    <View style={ styles.container }>

      { photoUrl
      ? <Image source={{ uri: photoUrl }} style={ styles.image } />
      : null }

      <Text>{ tags.join(' ') }</Text>

    </View>
  )
}

/* -----------------   REACT-REDUX   ------------------ */

const mapState = ({ photo }) => ({ photo })
const mapDispatch = dispatch => ({
})

/* -----------------    NAVIGATOR    ------------------ */

const RecipiesScreen = connect(mapState, mapDispatch)(Recipies)

export default RecipiesScreen
