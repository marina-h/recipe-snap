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
    let { saved } = this.props
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
                  <CardTitle>
                    <Text style={ styles.mainTextSmall }>{ recipe.label }</Text>
                  </CardTitle>
                  <CardContent>
                    <Image source={{ uri: recipe.image }} style={ styles.image } />
                    <Text style={ styles.mainTextSmall }>Source: { recipe.source }</Text>
                  </CardContent>
                    <View style={ styles.cardAction }>
                      <Button
                        style={ styles.savedRecipeButtons }
                        title="Share"
                        icon={{ name: 'share' }}
                        onPress={ () => this.shareRecipe(recipe.label, recipe.url) } />
                      <Button
                        style={ styles.savedRecipeButtons }
                        title="Visit website"
                        icon={{ name: 'open-in-browser' }}
                        onPress={ () => visitRecipeUrl(recipe.url) } />
                      <Button
                        style={ styles.savedRecipeButtons }
                        title="Delete"
                        icon={{ name: 'delete' }}
                        onPress={() => {}} />
                    </View>
                  </Card>
              ))
            : <Text style={ [styles.mainFont, styles.mainText] }>No saved recipes!</Text>
          }

        </ScrollView>
      </Image>
    )
  }
}

/* -----------------   REACT-REDUX   ------------------ */

const mapState = ({ saved }) => ({ saved })
const mapDispatch = dispatch => ({
})

const SavedRecipesScreen = connect(mapState, mapDispatch)(SavedRecipes)

export default SavedRecipesScreen

// // {/*<Swipeout key={ idx }
//   right={ swipeoutBtns }
//   autoClose={ true }>
//   <View>
//     <Image source={{ uri: recipe.image }} style={ styles.image } />
//     <Text>{ recipe.label }</Text>
//     <Text>Source: { recipe.source }</Text>
//     <TouchableHighlight onPress={ () => this.shareRecipe(recipe.label, recipe.url) }>
//       <View>
//         <Text>Click to share this recipe</Text>
//       </View>
//     </TouchableHighlight>
//     <Button
//       title="Link to original website"
//       onPress={ () => visitRecipeUrl(recipe.url) }
//       />

//     {/*{ Add a select option to keep recipe in store. At the bottom of the page, add a Export link that can send all recipe links at once }*/}

//   // </View>
// </Swipeout>*/}
