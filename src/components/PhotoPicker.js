import React from 'react'
import { ImagePicker } from 'expo'
import { Button, Image, View, Text, ImageEditor, ImageStore } from 'react-native'
import { connect } from 'react-redux'
import {
  StackNavigator,
} from 'react-navigation'

import styles from '../style'
import { clarifaiApp } from '../secrets'
import { setPhotoUrl, setPhotoBase64, setPhotoTags } from '../redux/photo'
import RecipiesScreen from './Recipies'

/* -----------------    COMPONENT    ------------------ */

const PhotoPicker = ({ photo, setPhoto, setBase64, setTags, navigation }) => {
  let { navigate } = navigation

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    })

    if (!result.cancelled) {
      const fixedPhotoUrl = result.uri.replace('file://', '')
      setPhoto(fixedPhotoUrl)

      Image.getSize(fixedPhotoUrl, (width, height) => {
        let imageSize = {
          size: { width, height },
          offset: { x: 0, y: 0 }
        }

        // https://github.com/facebook/react-native/issues/12114
        ImageEditor.cropImage(fixedPhotoUrl, imageSize, (imageUri) => {
          ImageStore.getBase64ForTag(imageUri, (base64Data) => {
            setBase64(base64Data)
            getClarifaiTags(base64Data)
            ImageStore.removeImageForTag(imageUri);
          }, (reason) => console.log('ERROR 3: ', reason) )
        }, (reason) => console.log('ERROR 2: ', reason) )
      }, (reason) => console.log('ERROR 1: ', reason))
    }
  }

  const getClarifaiTags = (base64) => {
    clarifaiApp.models.predict(Clarifai.FOOD_MODEL, { base64: base64 })
    .then((res) => {
      // console.log('Clarifai result = ', res);
      let tags = []
      const concepts = res.outputs[0].data.concepts
      for (let i = 0; i < 3; i++) {
        tags.push(concepts[i].name)
      }
      setTags(tags)
      navigate('Recipies')
    }, (error) => {
      console.log('ERROR getting clarifai tags: ', error);
    })
  }

  return (
    <View style={ styles.container }>
      <Button
        title="Pick a food photo from your camera roll!"
        onPress={ pickImage }
      />

      {/*<Button
        title="Go to Recipies screen"
        onPress={ () => navigation.navigate('Recipies') }
      />*/}
    </View>
  )
}

/* -----------------   REACT-REDUX   ------------------ */

const mapState = ({ photo }) => ({ photo })
const mapDispatch = dispatch => ({
  setPhoto: (photo) => {
    dispatch(setPhotoUrl(photo))
  },
  setBase64: (base64) => {
    dispatch(setPhotoBase64(base64))
  },
  setTags: (tags) => {
    dispatch(setPhotoTags(tags))
  }
})

/* -----------------    NAVIGATOR    ------------------ */

const PhotoPickerScreen = connect(mapState, mapDispatch)(PhotoPicker)

const App = StackNavigator({
  Home: { screen: PhotoPickerScreen },
  Recipies: { screen: RecipiesScreen },
})

// export default connect(mapState, mapDispatch)(App)
export default connect()(App)
