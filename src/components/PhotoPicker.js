import React, { Component } from 'react'
import { ImagePicker } from 'expo'
import { Image, View, Text, ImageEditor, ImageStore, Linking } from 'react-native'
import { Button, CheckBox } from 'react-native-elements'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay';

import styles from '../style'
import { clarifaiApp } from '../secrets'
import { setPhotoUrl, setPhotoBase64, setPhotoTags } from '../redux/photo'
import { resetRecipies } from '../redux/recipes'

/* -----------------    COMPONENT    ------------------ */

class PhotoPicker extends Component {
    static navigationOptions = ({ navigation }) => ({
    title: `Recipe Snap`,
  })

  constructor(props) {
    super(props)
    this.state = {
      loading: false
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
    let { photo, setPhoto, setBase64, setTags, clearRecipies, navigation } = this.props
    let { navigate } = navigation

    const pickPhoto = async () => {
      let choice = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      })

      if (!choice.cancelled) {
        getImageUrl(choice)
      }
    }

    const takePhoto = async () => {
      let choice = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      })

      if (!choice.cancelled) {
        getImageUrl(choice)
      }
    }

    const getImageUrl = (input) => {

      this.startLoading()

      const fixedPhotoUrl = input.uri.replace('file://', '')
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
            clearRecipies()
            setClarifaiTagsAndNavigate(base64Data)
            ImageStore.removeImageForTag(imageUri);
          }, (reason) => console.error(reason))
        }, (reason) => console.error(reason))
      }, (reason) => console.error(reason))
    }

    const setClarifaiTagsAndNavigate = (base64) => {
      clarifaiApp.models.predict(Clarifai.FOOD_MODEL, { base64: base64 })
      .then((res) => {
        let tags = []
        const concepts = res.outputs[0].data.concepts
        for (let i = 0; i < 8; i++) {
          tags.push(concepts[i].name)
        }
        setTags(tags)
        this.stopLoading()
        navigate('Options')
      }, (error) => {
        console.error('ERROR getting clarifai tags: ', error);
      })
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
      <Image
      source={ require('../images/salad-background.jpg' )}
      style={ styles.backgroundImage } >
        <View style={ styles.photoPicker } >
          { !this.state.loading
            ?
              <View style={ styles.photoPicker }>
                <Text style={ [styles.mainFont, styles.mainText, { textAlign: 'center' }] }>Choose a photo for Recipe Snap to analyze:</Text>

                <Button
                  raised
                  large
                  title="Pick from your camera roll"
                  backgroundColor="#009688"
                  icon={{ name: 'photo-library' }}
                  onPress={ pickPhoto }
                />

                <Text style={ [styles.mainFont, styles.mainText] }>or:</Text>

                <Button
                  raised
                  large
                  title="Take a photo"
                  backgroundColor="#009688"
                  icon={{ name: 'add-a-photo' }}
                  onPress={ takePhoto }
                />
              </View>
          :
          <View style={{ flex: 1 }}>
            <Spinner
              visible={this.state.loading}
              textContent={ "Analyzing your photo..." }
              textStyle={ styles.spinnerText }
              color="#000"
              overlayColor="#F0EFF5" />
          </View>
        }
        </View>
      </Image>
    )
  }
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
  setTags: (tags, prefs) => {
    dispatch(setPhotoTags(tags, prefs))
  },
  clearRecipies: () => {
    dispatch(resetRecipies)
  }
})

const PhotoPickerScreen = connect(mapState, mapDispatch)(PhotoPicker)

export default PhotoPickerScreen
