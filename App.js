import './shim' // hack for using rn-nodify
import React from 'react';
import { Button, Image, View, Text, ImageEditor, ImageStore } from 'react-native';
import { ImagePicker } from 'expo';

import styles from './src/style'
import app from './src/clarifai'

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
    tagText: '',
    pictureBase64: ''
  };
  // contructor(props) {
  //   super(props)
  //   this.state = {
  //     image: null
  //   }
  // }

  render() {
    let { image } = this.state;

    return (
      <View style={ styles.container }>
        <Button
          title="Pick an image from camera roll"
          onPress={ this._pickImage }
        />
        {image &&
          <Image source={{ uri: image }} style={ styles.image } />}

        <Text>{this.state.tagText}</Text>
      </View>
    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri.replace('file://', '') });

      let imageURL = this.state.image;

      Image.getSize(imageURL, (width, height) => {
        let imageSize = {
          size: { width, height },
          offset: { x: 0, y: 0 }
        }

        // https://github.com/facebook/react-native/issues/12114
        ImageEditor.cropImage(imageURL, imageSize, (imageURI) => {
          ImageStore.getBase64ForTag(imageURI, (base64Data) => {
            this.setState({ pictureBase64: base64Data });

            let base64 = this.state.pictureBase64
            app.models.predict(Clarifai.FOOD_MODEL, { base64: base64 })
            .then((res) => {
              console.log('Clarifai result = ', res);
              let tags = '';
              for (let i = 0; i < res.outputs[0].data.concepts.length; i++) {
                tags += res.outputs[0].data.concepts[i].name + ' ';
              }
              console.log('TAGS', tags)
              this.setState({ tagText: tags });
            },
            (error)=>{
              console.log(error);
            });

            ImageStore.removeImageForTag(imageURI);
          }, (reason) => console.log(reason) )
        }, (reason) => console.log(reason) )
      }, (reason) => console.log(reason))
    }
  };
}
