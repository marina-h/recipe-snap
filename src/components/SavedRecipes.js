import React, { Component } from 'react'
import { Image, View, Text, ScrollView, Linking, Share, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { Button, ButtonGroup, Icon } from 'react-native-elements'
import IconBadge from 'react-native-icon-badge'
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

import styles from '../style'
import { deleteFromSaved } from '../redux/saved'

/* -----------------    COMPONENT    ------------------ */

class SavedRecipes extends Component {
  constructor(props) {
    super(props)
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Saved Recipes`,
    tabBarLabel: `Saved Recipes`,
    tabBarIcon: <Icon name="list" />
    // () => {
    //   return (
    //     <IconBadge
    //       MainElement={
    //         <Icon name="list" />
    //       }
    //       BadgeElement={
    //         <Text style={ styles.badge }>{ Object.keys(this.props.saved.SavedRecipes).length }</Text>
    //       }
    //       IconBadgeStyle={{
    //         width: 12,
    //         height: 12,
    //       }}
    //     />
    //   )
    // }
  })

  shareRecipe(name, url) {
    Share.share({
      title: name,
      message: `Here's a recipe I found with Recipe Snap: ${ name }`,
      url: url
    }, {
      dialogTitle: 'Sharing options: ',
      // tintColor: 'green'
    })
    .catch(err => console.log(err))
  }

  render() {
    let { saved, deleteFromSavedList } = this.props
    let { savedRecipesList } = saved

    const visitRecipeUrl = (url) => {
      Linking.openURL(url)
      .catch(err => console.error('Error: ', err))
    }

    const cardActionStyle = {
      cardAction: {
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
      }
    }

    return (
      <Image
        source={ require('../images/salad-background.jpg' )}
        style={ styles.backgroundImage } >
        <ScrollView>

          {/* Maybe add a separate screen to select ingredients from tags list */}
          {/* Possibly make each recipe show more info (ingredients, calories) when tapped */}
          {
            savedRecipesList.length
            ? savedRecipesList.map((recipe, idx) => (
                <Card key={ idx } >
                  <Image
                    source={( require('../images/cloth.png') )}
                    style={ styles.cardBackground } >
                    <View style={ styles.photoPicker } >
                    <CardTitle>
                      <Text style={ [styles.mainTextSmall, styles.mainFont] }>{ recipe.label }</Text>
                    </CardTitle>
                    <CardContent>
                      <Image source={{ uri: recipe.image }} style={ styles.image } />
                      <Text style={ [styles.mainTextSmall, styles.mainFont, { fontStyle: 'italic' }] }>Source: { recipe.source }</Text>
                    </CardContent>
                      <View style={ styles.cardAction }>
                        <Button
                          style={ styles.savedRecipeButtons }
                          title="Share"
                          icon={{ name: 'share' }}
                          backgroundColor="#009688"
                          onPress={ () => this.shareRecipe(recipe.label, recipe.url) } />
                        <Button
                          style={ styles.savedRecipeButtons }
                          title="Visit website"
                          icon={{ name: 'open-in-browser' }}
                          backgroundColor="#009688"
                          onPress={ () => visitRecipeUrl(recipe.url) } />
                        <Button
                          style={ styles.savedRecipeButtons }
                          title="Delete"
                          icon={{ name: 'delete' }}
                          backgroundColor="#F44336"
                          onPress={() => deleteFromSavedList(recipe.url) } />
                      </View>
                    </View>
                  </Image>
                </Card>
              ))
            : <View></View>
          }
        </ScrollView>
      </Image>
    )
  }
}

/* -----------------   REACT-REDUX   ------------------ */

const mapState = ({ saved }) => ({ saved })
const mapDispatch = dispatch => ({
  deleteFromSavedList: (url) => {
    dispatch(deleteFromSaved(url))
  }
})

const SavedRecipesScreen = connect(mapState, mapDispatch)(SavedRecipes)

export default SavedRecipesScreen
